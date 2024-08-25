// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useAuth } from "../AuthContext";

// const AdminHollowBlocks = () => {
//   const { token } = useAuth();
//   const [HollowBlocks, setHollowBlocks] = useState([]);
//   const [newHollowBlocks, setNewHollowBlocks] = useState({
//     price: "",
//     description: "",
//     image_url: "",
//   });

//   useEffect(() => {
//     axios
//       .get("http://localhost:5555/hollowblocks")
//       .then((response) => setHollowBlocks(response.data))
//       .catch((error) => console.error(error));
//   }, []);

//   const handleCreate = () => {
//     axios
//       .post("http://localhost:5555/hollowblocks", newHollowBlocks, {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((response) => setHollowBlocks([...hollowblocks, response.data]))
//       .catch((error) => console.error(error));
//   };

//   const handleDelete = (id) => {
//     axios
//       .delete("http://localhost:5555/hollowblocks", {
//         headers: { Authorization: `Bearer ${token}` },
//         data: { hollowblocks_id: id },
//       })
//       .then(() =>
//         setHollowBlocks(hollowblocks.filter((block) => block.id !== id))
//       )
//       .catch((error) => console.error(error));
//   };

//   return (
//     <div>
//       <h2>Manage HollowBlocks</h2>
//       <div>
//         <input
//           type="text"
//           placeholder="Price"
//           value={newHollowBlocks.price}
//           onChange={(e) =>
//             setNewHollowBlocks({ ...newHollowBlocks, price: e.target.value })
//           }
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={newHollowBlocks.description}
//           onChange={(e) =>
//             setNewHollowBlocks({
//               ...newHollowBlocks,
//               description: e.target.value,
//             })
//           }
//         />
//         <input
//           type="text"
//           placeholder="Image URL"
//           value={newHollowBlocks.image_url}
//           onChange={(e) =>
//             setNewHollowBlocks({
//               ...newHollowBlocks,
//               image_url: e.target.value,
//             })
//           }
//         />
//         <button onClick={handleCreate}>Add HollowBlocks</button>
//       </div>

//       <ul>
//         {HollowBlocks.map((block) => (
//           <li key={block.id}>
//             {block.description} - ${block.price}
//             <button onClick={() => handleDelete(block.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminHollowBlocks;
