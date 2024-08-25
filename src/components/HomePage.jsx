import React from "react";
import ImageCarousel from "./ImageCarousel";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* HomePage content */}
      <h1>Welcome to Matrix Precast Concrete</h1>
      <p>Your solution for quality precast concrete products.</p>
      <ImageCarousel />
    </div>
  );
};

export default HomePage;
