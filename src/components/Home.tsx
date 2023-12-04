import React, { useEffect, useState } from "react";
import BoatCard from "./BoatCard/BoatCard";
import { Boat } from "./types/Boat";

interface HomeProps {
  searchTerm: string;
  onSearchTermChange: (newSearchTerm: string) => void;
}

const Home: React.FC<HomeProps> = ({ searchTerm, onSearchTermChange }) => {
  const [filteredBoats, setFilteredBoats] = useState<Boat[]>([]);

  useEffect(() => {
    fetch("/dbBoats.json")
      .then((response) => response.json())
      .then((data: { boats: Boat[] }) => {
        const result = data.boats.filter(
          (boat) =>
            boat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            boat.price.toString().includes(searchTerm) ||
            boat.type.toString().includes(searchTerm) ||
            boat.year.toString().includes(searchTerm) ||
            boat.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBoats(result);
      })
      .catch((error) => console.error("Error fetching boats:", error));
  }, [searchTerm]);

  return (
    <div>
      <ul>
        {filteredBoats.map((boat) => (
          <BoatCard key={boat.id} boat={boat} isFullView={true} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
