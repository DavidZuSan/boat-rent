import React, { useEffect, useState } from "react";
import BoatCard from "./BoatCard/BoatCard";
import { Boat } from "./types/Boat";

interface HomeProps {
  searchTerm: string;
  onSearchTermChange: (newSearchTerm: string) => void;
}

const Home: React.FC<HomeProps> = ({ searchTerm, onSearchTermChange }) => {
  const [filteredBoats, setFilteredBoats] = useState<Boat[]>([]);
  const [selectedBoatId, setSelectedBoatId] = useState<number | null>(null);

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

  const handleBoatClick = (id: number) => {
    console.log("Boat clicked:", id);
    setSelectedBoatId(id);
  };

  return (
    <div>
      <ul>
        {filteredBoats.map((boat) => (
          <li key={boat.id} onClick={() => handleBoatClick(boat.id)}>
            <BoatCard boat={boat} isFullView={selectedBoatId === boat.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
