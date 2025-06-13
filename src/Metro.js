import React from "react";
import MetroFinder from "./MetroFinder";
import Home from "./Home"
import { Link } from "react-router-dom";

const Metro = () => {
  const handleLogout = () => {
    // localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <header style={headerStyle}>
        <div style={logoStyle}  >
          <h1>Metro Finder</h1>
        </div>
        <nav style={navStyle}>
          <ul style={navListStyle}>
            <li style={navItemStyle}>
              <Link to="/Home" style={navLinkStyle}>
                Home
              </Link>
            </li>
            <li style={navItemStyle}>
              <Link to="/login" style={navLinkStyle}>
                Login
              </Link>
            </li>
            <li style={navItemStyle}>
              <Link to="/Register" style={navLinkStyle}>
                Register
              </Link>
            </li>
            <li style={navItemStyle}>
              <Link to="/About" style={navLinkStyle}>
                About
              </Link>
            </li>
            <li style={navItemStyle}>
              <Link to="/contact" style={navLinkStyle}>
                Contact
              </Link>
            </li>
            
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <main style={mainContentStyle}>
        <div style={welcomeStyle}>
          <h2>Welcome to Metro Finder</h2>
          <p>Your ultimate guide to navigate metro stations and routes!</p>
          <button onClick={handleLogout} style={buttonStyle}>
            Logout
          </button>
        </div>

        {/* MetroFinder */}
        <div style={metroFinderWrapperStyle}>
          <MetroFinder />
        </div>

        {/* Quick Links */}
        <div style={quickLinksStyle}>
          <h1>Quick Links</h1>
          <div style={quickLinksGridStyle}>
            <div style={quickLinkCardStyle}>
              <Link to="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.delhimetrorail.com/map&ved=2ahUKEwjo8uyU4c-NAxXRyzgGHXJRJp8QFnoECBYQAQ&usg=AOvVaw2mkmRY2NK43nWK_EfEjxa2" style={quickLinkCardLinkStyle}>
                Metro Routes
              </Link>
            </div>
            <div style={quickLinkCardStyle}>
              <Link to="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://delhimetrorail.info/delhi-metro-stations&ved=2ahUKEwitkp7K4c-NAxUl1DgGHcq5KD4QFnoECBYQAQ&usg=AOvVaw00c3cW_exLcvY-QYfWzjGg" style={quickLinkCardLinkStyle}>
                Stations
              </Link>
            </div>
            <div style={quickLinkCardStyle}>
              <Link to="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://qrticket.dmrc.org/qrapp/&ved=2ahUKEwjk1-Db4c-NAxWnyzgGHaSoAIAQFnoECBcQAQ&usg=AOvVaw0WbF7G8aUzSSA7iUyWSdfQ" style={quickLinkCardLinkStyle}>
                Buy Tickets
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Inline styles for layout
const containerStyle = {
  fontFamily: "'Roboto', sans-serif",
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  backgroundColor: "#f5f5f5",
};

const headerStyle = {
  backgroundColor: "#00091e",
  color: "#00ffe0",
  padding: "20px 0",
  textAlign: "center",
  fontFamily: "'Roboto', sans-serif",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  border: "1px solid #00ffe0"
  
};

const logoStyle = {
  fontSize: "30px",
  fontWeight: "700",
};

const navStyle = {
  marginTop: "10px",
};

const navListStyle = {
  listStyleType: "none",
  padding: 0,
  display: "flex",
  justifyContent: "center",
  
};

const navItemStyle = {
  margin: "0 20px",
  
};

const navLinkStyle = {
color:"#00ffe0",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "500",
};

const mainContentStyle = {
  padding: "20px",
  textAlign: "center",
  backgroundColor: "#00091e",
};

const welcomeStyle = {
  marginBottom: "30px",
};

const buttonStyle = {
  backgroundColor: "#00ffe0",
  color: "#00091e",
  border: "none",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "4px",
  transition: "background-color 0.3s",
  marginTop: "20px",

};

const metroFinderWrapperStyle = {
  marginTop: "30px",
};

const quickLinksStyle = {
  marginTop: "50px",
  color:"#00ffe0",
};

const quickLinksGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
  marginTop: "20px",
};

const quickLinkCardStyle = {
  backgroundColor: "#00091e",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "4px 4px 4px  #00ffe0",
  textAlign: "center",
  color:"#00ffe0",
  border: "1px solid #00ffe0"
 

};

const quickLinkCardLinkStyle = {
  color: "#00ffe0",
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: "600",
  


};

// Responsive media queries for mobile view
const mediaQuery = `
  @media screen and (max-width: 768px) {
    .quickLinksGridStyle {
      grid-template-columns: 1fr;
    }
    .navListStyle {
      flex-direction: column;
    }
  }
`;

export default Metro;
