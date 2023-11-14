import React, { useEffect, useState } from "react";
import { Boat } from "./types/Boat";

const BoatList = () => {
  const [boats, setBoats] = useState<Boat[]>([]);

  useEffect(() => {
    fetch("/boats")
      .then((response) => response.json())
      .then((data: Boat[]) => setBoats(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Lista de Barcos</h1>
      <ul>
        {boats.map((boat) => (
          <li key={boat.id}>
            <strong>{boat.name}</strong>: {boat.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoatList;
