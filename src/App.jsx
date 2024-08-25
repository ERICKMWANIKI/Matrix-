import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import BeamBlock from "./components/BeamBlock";
import HollowBlocks from "./components/HollowBlocks";
import PavingBlocks from "./components/PavingBlocks";
import RoadKerb from "./components/RoadKerbAccessories";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Downloads from "./components/Downloads";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ContactUs from "./components/ContactUs";
import AdminDashboard from "./components/AdminDashboard";
import PrivateRoute from "./components/PrivateRoute";
import "./index.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
      //{" "}
    </AuthProvider>
  );
}

function AppContent() {
  const location = useLocation();

  // Define pages where Navbar should not be displayed
  const hideNavbarRoutes = ["/signup", "/login", "/admin"];

  return (
    <>
      {/* Conditionally render the Navbar */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beam-block" element={<BeamBlock />} />
        <Route path="/hollow-blocks" element={<HollowBlocks />} />
        <Route path="/paving-blocks" element={<PavingBlocks />} />
        <Route path="/road-kerb" element={<RoadKerb />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactus" element={<ContactUs />} />
        {/* Protected route for Admin Dashboard */}
        <Route
          path="/admin/*"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
