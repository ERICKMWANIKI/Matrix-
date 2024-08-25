// // src/pages/AdminBeamBlocks.js
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";

// const AdminBeamBlocks = () => {
//   const { token } = useAuth();
//   const [beamBlocks, setBeamBlocks] = useState([]);
//   const [newBeamBlock, setNewBeamBlock] = useState({
//     price: "",
//     description: "",
//     image_url: "",
//   });

//   useEffect(() => {
//     axios
//       .get("http://localhost:5555/beamblocks")
//       .then((response) => setBeamBlocks(response.data))
//       .catch((error) => console.error(error));
//   }, []);

//   const handleCreate = () => {
//     axios
//       .post("http://localhost:5555/beamblocks", newBeamBlock, {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((response) => setBeamBlocks([...beamBlocks, response.data]))
//       .catch((error) => console.error(error));
//   };

//   const handleDelete = (id) => {
//     axios
//       .delete("http://localhost:5555/beamblocks", {
//         headers: { Authorization: `Bearer ${token}` },
//         data: { beamblock_id: id },
//       })
//       .then(() => setBeamBlocks(beamBlocks.filter((block) => block.id !== id)))
//       .catch((error) => console.error(error));
//   };

//   return (
//     <div>
//       <h2>Manage BeamBlocks</h2>
//       <div>
//         <input
//           type="text"
//           placeholder="Price"
//           value={newBeamBlock.price}
//           onChange={(e) =>
//             setNewBeamBlock({ ...newBeamBlock, price: e.target.value })
//           }
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={newBeamBlock.description}
//           onChange={(e) =>
//             setNewBeamBlock({ ...newBeamBlock, description: e.target.value })
//           }
//         />
//         <input
//           type="text"
//           placeholder="Image URL"
//           value={newBeamBlock.image_url}
//           onChange={(e) =>
//             setNewBeamBlock({ ...newBeamBlock, image_url: e.target.value })
//           }
//         />
//         <button onClick={handleCreate}>Add BeamBlock</button>
//       </div>

//       <ul>
//         {beamBlocks.map((block) => (
//           <li key={block.id}>
//             {block.description} - ${block.price}
//             <button onClick={() => handleDelete(block.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminBeamBlocks;
