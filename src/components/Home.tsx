import React, { useEffect, useState } from "react";
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
            boat.year.toString().includes(searchTerm) ||
            boat.price.toString().includes(searchTerm) ||
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
          <li key={boat.id}>
            <img
              src={boat.image}
              alt={`Imagen del ${boat.name}`}
              style={{ width: "100%" }}
            />
            <strong>{boat.name}</strong>: {boat.description}
            <div>Type: {boat.type}</div>
            <div>Year: {boat.year}</div>
            <div>Price: {boat.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
