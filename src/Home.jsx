import React from "react";
import "./index.css";
import About from './About';
import Metro from "./Metro";


import log from './assets/log.jpg';
import main2 from './assets/main2.jpg';
import eco from './assets/eco.jpg';
import fast from './assets/fast.jpg';
import available from './assets/available.jpg';
// import { Link } from "react-router-dom";



function Home() {
  return (
    <div>
      <section>
        {/* Navbar Section */}
        <header>
          <nav className="navbar">
            <div className="navbar-brand">
              <img src={log} width="50px" height="50px" alt="metro" className="logo" />
              <div className="logo"><h1>Metro Connect</h1></div>
            </div>
            <ul className="nav-links">
              <li><a href="/login"><h1>Login</h1></a></li>
              <li><a href="/register"><h1>Register</h1></a></li>
              <li><a href="/about"><h1>About Us</h1></a></li>
              <li><a href="/contact"><h1>Contact Us</h1></a></li>
              {/* <li>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </li> */}
            </ul>
          </nav>
        </header>
      </section>

      {/* Hero Section */}
      <section id="home" className="hero">
        <img src={main2} alt="Main" className="hero-image" />
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h1>Our Services</h1>
        <div className="service-cards">
          <div className="card">
            <img src={fast} alt="Fast Travel" className="card-image" />
            <h3>Fast Travel</h3>
            <p>Experience quick and efficient travel across the city.</p>
          </div>
          <div className="card">
            <img src={eco} alt="Eco-Friendly Metro" className="card-image" />
            <h3>Eco-Friendly</h3>
            <p>Our metros are energy efficient, contributing to a greener city.</p>
          </div>
          <div className="card">
            <img src={available} alt="24/7 Availability" className="card-image" />
            <h3>24/7 Availability</h3>
            <p>Enjoy round-the-clock services for your convenience.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Metro Connect | All Rights Reserved</p>
      </footer>
    </div>
  );
}


// function Home() {
//   return (
//     <div> <section>
//       {/* <img src={main1} alt="Main" className="hero-image" /> */}
//       {/* Navbar Section */}
//       <header>

//         <nav className="navbar">
//           <tr>

//             <td><img src={log}
//               width="50px" height="50px"
//               alt="metro" className="logo"></img></td>

//             <td><div className="logo"><h1>Metro Connect</h1></div></td>
//           </tr>
//           <ul className="nav-links">
//             <li>
//               <a href="/login"><h1>Login</h1></a>
//             </li>
//             <li>
//               <a href="/register"><h1>Register</h1></a>
//             </li>
//             <li>
//               <a href="/about"><h1>About Us</h1></a>
//             </li>
//             <li>
//               <a href="/contact"><h1>Contact Us</h1></a>
//             </li>
//             <li>
//               <label class="switch">
//                 <input type="checkbox" />
//                 <span class="slider round"></span>
//               </label>

//             </li>
//           </ul>
//         </nav>
//       </header>
//     </section>
//     </div>
    
//       {/* Hero Section */ }
//       <div>
//   <section id="home" className="hero">
//     <img src={main1} alt="Main" className="hero-image" />
//     {/* <div className="hero-content">
//           <h1>Connecting You to the Future of Transport</h1>
//           <h2>Seamless Metro Services Across the City</h2>
//           <a href="/services" className="btn">
//             Explore Services
//           </a>
//         </div> */}
//     {/* </section>  */}

//   </section>
// </div>
//   {/* Services Section */ }
//   <section id="services" className="services">
//     <h1>Our Services</h1>
//     <div className="service-cards">
//       <div className="card">
//         <img
//           src={fast}
//           alt="Fast Travel"
//           className="card-image"
//         />
//         <h3>Fast Travel</h3>
//         <p>Experience quick and efficient travel across the city.</p>
// </div>
//         <div className="card">
//           <img
//             src={eco}
//             alt="Eco-Friendly Metro"
//             className="card-image"
//           />
//           <h3>Eco-Friendly</h3>
//           <p>
//             Our metros are energy efficient, contributing to a greener city.
//           </p>
//         </div>
//         <div className="card">
//           <img
//             src={available}
//             alt="24/7 Availability"
//             className="card-image"
//           />
//           <h3>24/7 Availability</h3>
//           <p>Enjoy round-the-clock services for your convenience.</p>
//         </div>
//       </div>
//   </section>

//   {/* Footer Section */ }
//   <footer>
//     <p>&copy; 2025 Metro Connect | All Rights Reserved</p>
//   </footer>

//     );
 
// }

export default Home;
