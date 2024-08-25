import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link, Route, Routes } from "react-router-dom";
// import AdminBeamBlocks from "./AdminBeamBlocks";

const AdminDashboard = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={logout}>Logout</button>
      <ul>
        <li>
          <Link to="/admin/beamblocks">Manage BeamBlocks</Link>
        </li>
        {/* Add more links to other resources like HollowBlocks, PavingBlocks, etc. */}
      </ul>
      <Routes>
        <Route path="/admin/beamblocks" element={<AdminBeamBlocks />} />
        {/* Add more routes for other resources */}
      </Routes>
    </div>
  );
};

export default AdminDashboard;
