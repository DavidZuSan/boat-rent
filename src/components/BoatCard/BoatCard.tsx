import React, { useState } from "react";
import { Boat } from "../types/Boat";
import "./BoatCard.scss";

interface BoatCardProps {
  boat: Boat;
  isFullView?: boolean;
}
const BoatCard: React.FC<BoatCardProps> = ({ boat, isFullView = false }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  return (
    <div
      className={`boat-card ${isFullView ? "full-view" : ""} ${
        selectedImage ? "image-selected" : ""
      }`}
    >
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
            {boat.imageInside && boat.imageInside.length > 0 && (
              <div className="boat-images-inside">
                {boat.imageInside.map((imagePath, index) => (
                  <img
                    key={index}
                    src={imagePath}
                    alt={`Interior ${index + 1} del ${boat.name}`}
                    onClick={() => handleImageClick(imagePath)}
                  />
                ))}
              </div>
            )}
            <div className="boat-description">
              {Array.isArray(boat.description) ? (
                boat.description.map((paragraph, index) => (
                  <p key={index} className="description">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="description">{boat.description}</p>
              )}
            </div>
            <div className="boat-features">
              <div className="feature-item">
                <i className="bi bi-speedometer" />
                <span className="feature-text"> {boat.speed} km/h</span>
              </div>
              <div className="feature-item">
                <i className="bi bi-arrows" />
                <span className="feature-text"> Length {boat.length}m</span>
              </div>
              <div className="feature-item">
                <i className="bi bi-suitcase" />
                <span className="feature-text"> {boat.bedrooms} bedrooms</span>
              </div>
            </div>
            {selectedImage && (
              <div className="image-popup">
                <img
                  src={selectedImage}
                  alt="Ampliada"
                  onClick={handleCloseImage}
                />
                <button className="close-button" onClick={handleCloseImage}>
                  X
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BoatCard;
