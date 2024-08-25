import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [showSignInForm, setShowSignInForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    user_name: "",
    email: "",
    phone_number: "",
    password: "",
    repeatPassword: "",
    showPassword: false,
    showRepeatPassword: false,
    role: "", // Role can be "admin" or "user"
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formErrors, setFormErrors] = useState({
    title: false,
    user_name: false,
    email: false,
    phone_number: false,
    password: false,
    repeatPassword: false,
    role: false,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formErrors[e.target.name]) {
      setFormErrors({ ...formErrors, [e.target.name]: false });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.title) newErrors.title = true;
    if (!formData.user_name) newErrors.user_name = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.phone_number) newErrors.phone_number = true;
    if (!formData.password) newErrors.password = true;
    if (formData.password !== formData.repeatPassword)
      newErrors.repeatPassword = true;
    if (!formData.role) newErrors.role = true;

    setFormErrors(newErrors);

    if (Object.keys(newErrors).length) return;

    try {
      const response = await axios.post("http://127.0.0.1:5555/users", {
        title: formData.title,
        user_name: formData.user_name,
        email: formData.email,
        phone_number: formData.phone_number,
        password: formData.password,
        role: formData.role,
      });

      if (response.status === 201) {
        setSuccessMessage("User signed up successfully!");

        // Redirect based on role
        if (formData.role === "admin") {
          setTimeout(() => {
            navigate("/admin", { replace: true });
          }, 3000);
        } else {
          setTimeout(() => {
            navigate("/login", { replace: true });
          }, 3000);
        }
      } else {
        const errorResult = await response.json();
        setErrorMessage(errorResult.error || "Signup failed.");
      }
    } catch (error) {
      setErrorMessage("Error: " + error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  const toggleRepeatPasswordVisibility = () => {
    setFormData({
      ...formData,
      showRepeatPassword: !formData.showRepeatPassword,
    });
  };

  const handleSnackbarClose = () => {
    setSuccessMessage("");
    setErrorMessage("");
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        padding: "2rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", width: "100%", maxWidth: "800px" }}>
        <div style={{ flex: 1, padding: "1rem" }}>
          <img
            src="path-to-your-image"
            alt="Auth"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div style={{ flex: 1, padding: "1rem" }}>
          <button
            onClick={() => setShowSignInForm(!showSignInForm)}
            style={{ marginBottom: "1rem" }}
          >
            Back
          </button>
          <h2>Sign Up</h2>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label>
              Title
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                style={{ margin: "0.5rem 0" }}
              />
              {formErrors.title && (
                <span style={{ color: "red" }}>Title is required</span>
              )}
            </label>
            <label>
              Username
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleInputChange}
                style={{ margin: "0.5rem 0" }}
              />
              {formErrors.user_name && (
                <span style={{ color: "red" }}>Username is required</span>
              )}
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={{ margin: "0.5rem 0" }}
              />
              {formErrors.email && (
                <span style={{ color: "red" }}>Email is required</span>
              )}
            </label>
            <label>
              Phone Number
              <input
                type="text"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleInputChange}
                style={{ margin: "0.5rem 0" }}
              />
              {formErrors.phone_number && (
                <span style={{ color: "red" }}>Phone number is required</span>
              )}
            </label>
            <label>
              Role
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                style={{ margin: "0.5rem 0" }}
              >
                <option value="">Select a role</option>
                <option value="admin">Admin</option>
                <option value="customer">Customer</option>
              </select>
              {formErrors.role && (
                <span style={{ color: "red" }}>Role is required</span>
              )}
            </label>
            <label>
              Password
              <input
                type={formData.showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                style={{ margin: "0.5rem 0" }}
              />
              {formErrors.password && (
                <span style={{ color: "red" }}>Password is required</span>
              )}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                style={{ marginTop: "0.5rem" }}
              >
                {formData.showPassword ? "Hide Password" : "Show Password"}
              </button>
            </label>
            <label>
              Repeat Password
              <input
                type={formData.showRepeatPassword ? "text" : "password"}
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleInputChange}
                style={{ margin: "0.5rem 0" }}
              />
              {formErrors.repeatPassword && (
                <span style={{ color: "red" }}>Passwords do not match</span>
              )}
              <button
                type="button"
                onClick={toggleRepeatPasswordVisibility}
                style={{ marginTop: "0.5rem" }}
              >
                {formData.showRepeatPassword
                  ? "Hide Password"
                  : "Show Password"}
              </button>
            </label>
            <button
              type="submit"
              style={{
                marginTop: "1rem",
                backgroundColor: "#d32f2f",
                color: "white",
                padding: "0.75rem",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      {(successMessage || errorMessage) && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: successMessage ? "#4CAF50" : "#D32F2F",
            color: "white",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <p>{successMessage || errorMessage}</p>
          <button
            onClick={handleSnackbarClose}
            style={{
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default SignUp;
