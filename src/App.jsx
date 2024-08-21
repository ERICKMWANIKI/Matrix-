import React from "react";
import HomePage from "./components/HomePage.jsx"; // Import the HomePage component
import "./index.css"; // Import global CSS (if not already imported in main.jsx)
import ImageCarousel from "./components/ImageCarousel"; // Import ImageCarousel from the components directory

function App() {
  return (
    <div className="App">
      <HomePage /> {/* Render the HomePage component */}
      <ImageCarousel /> {/* Render the ImageCarousel component */}
    </div>
  );
}

export default App;
