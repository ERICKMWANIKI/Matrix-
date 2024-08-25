import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignInOptions = ({ handleOpen }) => {
  return (
    <div className="signin-options">
      <h5>Let's log you in</h5>
      <div className="signin-option" onClick={() => handleOpen("email")}>
        <span className="icon">&#9993;</span>
        <span>Log In with email</span>
      </div>
      <Link to="/signup" className="signup-link">
        Don't have an account? Sign up
      </Link>
    </div>
  );
};

const SignInForm = ({ signInWithEmail, handleClose }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = "http://127.0.0.1:5555/login";
    const body = JSON.stringify({
      email: formData.email,
      password: formData.password,
    });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem("access_token", result.token);
        localStorage.setItem("role", result.role);
        localStorage.setItem("id", result.id);
        setMessage("User signed in successfully!");
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 3000);
      } else {
        const errorResult = await response.json();
        setMessage(
          errorResult.error || "Login failed. Please check your credentials."
        );
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }

    handleClose();
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="signin-form">
      <button className="back-button" onClick={handleClose}>
        &larr; Back
      </button>
      <h2>Log In</h2>
      {message && <p className="message">{message}</p>}
      {signInWithEmail && (
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <span
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? "Hide" : "Show"}
              </span>
            </div>
          </div>
          <button type="submit" className="submit-button">
            Log In with Email
          </button>
        </form>
      )}
    </div>
  );
};

const Login = () => {
  const [signInWithEmail, setSignInWithEmail] = useState(false);

  const handleOpen = (method) => {
    setSignInWithEmail(method === "email");
  };

  const handleClose = () => {
    setSignInWithEmail(false);
  };

  return (
    <div className="login-container">
      <div className="login-image"></div>
      <div className="login-form-container">
        {signInWithEmail ? (
          <SignInForm
            signInWithEmail={signInWithEmail}
            handleClose={handleClose}
          />
        ) : (
          <SignInOptions handleOpen={handleOpen} />
        )}
      </div>
    </div>
  );
};

export default Login;
