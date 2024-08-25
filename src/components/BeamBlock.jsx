import React, { useEffect, useState } from "react";
import axios from "axios";

const BeamBlock = () => {
  const [beamblocks, setBeamblocks] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5555/beamblocks") // Fetch beamblocks
      .then((response) => {
        setBeamblocks(response.data); // Assuming response contains an array of beamblocks
      })
      .catch((error) => {
        console.error("Error fetching beamblocks:", error);
      });
  }, []);

  return (
    <div className="beamblock">
      {beamblocks.map((block, index) => (
        <div key={index} className="beamblock-item">
          <img
            src={`http://localhost:5555/static/BeamBlock.jpeg`} // Ensure this URL matches the actual path served
            alt={`BeamBlock ${index + 1}`}
            style={{ width: "200px", margin: "10px" }}
          />
          <p>{block.description}</p>
          <p>Price: ${block.price}</p>
        </div>
      ))}
    </div>
  );
};

export default BeamBlock;
