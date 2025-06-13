import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import register1 from './assets/register1.jpg';



const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/register", {
        name,
        email,
        password,
      });
      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
   //<section> <img src={register} alt="Main" className="register-image" />
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h1 style={headingStyle}>Register</h1>
        <img src={register1} alt="Main" className="register-image" />
        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            required
            style={inputStyle}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            style={inputStyle}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            Register
          </button>
        </form>
        {/* <img src={register} alt="register" className="register-image" /> */}
        <div style={redirectContainerStyle}>
          <p style={redirectTextStyle}>
            Already have an account?{" "}
            <a href="/login" style={linkStyle}>
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
    
  );
};

// Inline styles for layout and styling

 
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#00091e ",
};

const formContainerStyle = {
  backgroundColor: "#00091e ",
  padding: "30px 40px",
  borderRadius: "8px",
  boxShadow: "0px 0px 20px rgba(236, 230, 230, 0.96)",
  width: "100%",
  maxWidth: "400px",
  textAlign: "center",
    border: "5px solid #00ffe0 ",
    
};

const headingStyle = {
  marginBottom: "20px",
  fontSize: "40px",
  fontWeight: "600",
  color: "#00ffe0",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const inputStyle = {
  padding: "12px",
  margin: "10px 0",
  width: "100%",
  maxWidth: "350px",
  border: "5px solid #00ffe0 ",
  borderRadius: "10px",
  fontSize: "20px",
};

const buttonStyle = {
  backgroundColor: "#00ffe0",
  color: "#00091e",
  border: "none",
  padding: "12px 20px",
  fontSize: "20px",
  cursor: "pointer",
  borderRadius: "4px",
  marginTop: "15px",
  transition: "background-color 0.3s ease",
};

const redirectContainerStyle = {
  marginTop: "20px",
};

const redirectTextStyle = {
  fontSize: "20px",
  color: "#00ffe0",
};

const linkStyle = {
  color: "#00ffe0",
  textDecoration: "none",
  fontWeight: "600",
  fontSize:"20px",
};

export default Register;
