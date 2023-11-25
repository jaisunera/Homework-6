import React, { useState, useEffect } from "react";
import "./KittenAPI.css";

export default function KittenAPI() {
  const [kittenImage, setKittenImage] = useState(null); // State to store the image URL
  const [imageWidth, setImageWidth] = useState(200); // Initial width
  const [imageHeight, setImageHeight] = useState(300); // Initial height

  useEffect(() => {
    async function fetchKittenImage() {
      try {
        const response = await fetch(
          `https://placekitten.com/${imageWidth}/${imageHeight}`,
        );
        if (response.ok) {
          const imageUrl = response.url;
          setKittenImage(imageUrl);
        } else {
          console.error("Failed to fetch image");
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    }

    fetchKittenImage();
  }, [imageWidth, imageHeight]); // Fetch image when width or height changes

  return (
    <div className="kitten-section">
      <h2>Cute Kitten Image:</h2>
      <label>Width:</label>
      <input
        type="number"
        value={imageWidth}
        onChange={(e) => setImageWidth(e.target.value)}
      />
      <label>Height:</label>
      <input
        type="number"
        value={imageHeight}
        onChange={(e) => setImageHeight(e.target.value)}
      />
      {kittenImage && (
        <div>
          <img
            src={kittenImage}
            alt="Kitten"
            width={imageWidth}
            height={imageHeight}
          />
        </div>
      )}
    </div>
  );
}
