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
        const result = data.boats.filter((boat) => {
          const searchTermLower = searchTerm.toLowerCase();
          const nameMatch = boat.name.toLowerCase().includes(searchTermLower);
          const priceMatch = boat.price === Number(searchTerm);
          const typeMatch = Array.isArray(boat.type)
            ? boat.type.some((type) =>
                type.toLowerCase().includes(searchTerm.toLowerCase())
              )
            : boat.type.toLowerCase().includes(searchTerm.toLowerCase());

          const yearMatch = boat.year.toString().includes(searchTerm);
          const descriptionMatch = Array.isArray(boat.description)
            ? boat.description.some((desc) =>
                desc.toLowerCase().includes(searchTerm.toLowerCase())
              )
            : boat.description.toLowerCase().includes(searchTerm.toLowerCase());

          return (
            typeMatch ||
            yearMatch ||
            nameMatch ||
            priceMatch ||
            descriptionMatch
          );
        });
        setFilteredBoats(result);
      })
      .catch((error) => console.error("Error fetching boats:", error));
  }, [searchTerm]);

  const handleBoatClick = (id: number) => {
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
