import React from "react";
import { Boat } from "../types/Boat";
import "./BoatCard.scss";

interface BoatCardProps {
  boat: Boat;
  isFullView?: boolean;
}

const BoatCard: React.FC<BoatCardProps> = ({ boat, isFullView = false }) => {
  return (
    <div className={`boat-card ${isFullView ? "full-view" : ""}`}>
      <img src={boat.image} alt={`Imagen del ${boat.name}`} />
      <div className="boat-info">
        <strong>{boat.name}</strong>
        <div>Price: {boat.price}</div>
        {isFullView && (
          <>
            <p>{boat.description}</p>
            <div>Type: {boat.type}</div>
            <div>Year: {boat.year}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default BoatCard;
