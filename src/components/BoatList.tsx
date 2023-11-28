import React, { useEffect, useState } from "react";
import { Boat, BoatsData } from "./types/Boat";

interface BoatListProps {
  searchTerm: string;
}

const BoatList: React.FC<BoatListProps> = ({ searchTerm }) => {
  const [filteredBoats, setFilteredBoats] = useState<Boat[]>([]);

  useEffect(() => {
    fetch("/dbBoats.json")
      .then((response) => response.json())
      .then((data: BoatsData) => {
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
      <h1>Lista de Barcos</h1>
      <ul>
        {filteredBoats.map((boat) => (
          <li key={boat.id}>
            <strong>{boat.name}</strong>: {boat.description}
            <div>Año: {boat.year}</div>
            <div>Precio: {boat.price}</div>
            {/* Asegúrate de que los campos como 'image' estén siendo utilizados si están presentes */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoatList;
