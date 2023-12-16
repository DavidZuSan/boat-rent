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
        <div className="boat-name-and-price">
          <strong className="boat-name">{boat.name.toUpperCase()}</strong>
          <div className="price">
            <span className="price-label">From</span>
            <span className="price-value">${boat.price}</span>
          </div>
        </div>
        {isFullView && (
          <>
            {Array.isArray(boat.description) ? (
              boat.description.map((paragraph, index) => (
                <p key={index} className="description">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="description">{boat.description}</p>
            )}
            <div className="type-and-year">
              <span>Type: {boat.type}</span>
              <span>Year: {boat.year}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BoatCard;
