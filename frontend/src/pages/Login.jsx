// React Hook
import { useState } from "react";

// Used for page redirection
import { useNavigate } from "react-router-dom";

// Axios instance
import api from "../services/api";

import "./Auth.css";

function Login() {

  // Stores email entered by user
  const [email, setEmail] = useState("");

  // Stores password entered by user
  const [password, setPassword] = useState("");

  // Used for navigation
  const navigate = useNavigate();

  // Function runs when Login button is clicked
  const handleLogin = async () => {

    try {

      // Send data to backend
      const response = await api.post(
        "/auth/login",
        {
          email,
          password,
        }
      );

      // Save JWT token
      localStorage.setItem(
        "token",
        response.data.token
      );

      alert("Login Successful");

      // Redirect user
      navigate("/");

    } catch (error) {

      console.log(error);

      alert("Login Failed");

    }
  };

 return (
  <div className="auth-container">

    <div className="auth-card">

      <h1>Welcome Back</h1>

      <p className="auth-subtitle">
        Login to continue planning your trips
      </p>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>

  </div>
);
}

export default Login;