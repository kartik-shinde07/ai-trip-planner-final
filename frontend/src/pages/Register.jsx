import { useState } from "react";
import API from "../services/api";
import "./Auth.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await API.post("/auth/register", {
        name,
        email,
        password,
      });

      alert("Registration Successful!");
      console.log(response.data);
    } catch (error) {
  console.log(error.response);
  console.log(error.response?.data);
  alert("Registration Failed");
}
  };

  return (
  <div className="auth-container">

    <div className="auth-card">

      <h1>Create Account</h1>

      <p className="auth-subtitle">
        Start planning your dream trips
      </p>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

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

      <button onClick={handleRegister}>
        Register
      </button>

    </div>

  </div>
);
}

export default Register;