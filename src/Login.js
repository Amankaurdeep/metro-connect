import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import login from './assets/login.jpg';



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const { data } = await axios.post("http://localhost:5000/api/login", {
       email,
        password,
      });
       localStorage.setItem("token", data.token);
      alert("Login successful!");
      navigate("/metro");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
         <section>   
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h1 style={headingStyle}>🔐Login</h1>
        <img src={login}  alt="login" className="loginimage" />
        <form onSubmit={handleSubmit} style={formStyle}>
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
          <button type="submit" style={buttonStyle} onAnimationEnd={BroadcastChannel}>
            Login
          </button>
        </form>
        <div style={redirectContainerStyle}>
          <p style={redirectTextStyle}>
            Don't have an account?{" "}
            <a href="/register" style={linkStyle}>
              Register
            </a>
          </p>
        </div>
      </div>
    </div></section>
  );
};

// Inline styles for layout and styling
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#00091e",

  
  
  };


const formContainerStyle = {
  backgroundColor: "#00091e",
  padding: "30px 40px",
  borderRadius: "8px",
  boxShadow: "0px 0px 20px rgba(240, 236, 236, 0.82)",
  width: "100%",
  maxWidth: "400px",
  textAlign: "center",
 border: "5px solid #00ffe0",
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
  border: "5px solid #00ffe0",
  borderRadius: "10px",
 
  
};

const buttonStyle = {
  backgroundColor: "#00ffe0",
  color: "#00091e",
  border: "5px solid ",
  padding: "12px 20px",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "10px",
  marginTop: "15px",
  transition: "background-color 0.3s ease",
};

const redirectContainerStyle = {
  marginTop: "20px",
};

const redirectTextStyle = {
  fontSize: "14px",
  color: "#00ffe0",
  
};

const linkStyle = {
  color: "#00ffe0",
  textDecoration: "none",
  fontWeight: "800",
  fontSize:"24px",
};

export default Login;
