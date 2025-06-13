import React from 'react';
import './About.css';
import metro from './assets/metro.jpg';
import about from './assets/about.jpg';
// import about2 from './assets/about2.jpg';

const About = () => {
  return (
    <div className="about-page">
      <div className="image-section">
        <img
          src={metro}
          alt="Metro train"
          className="metro-image"
        />
        <div className="image-overlay">
          <h1>Metro Finder</h1>
          <p>Helping you travel smarter, faster, and stress-free.</p>
        </div>
      </div>

      <div className="about-content">
        <section>
          <h2>About Metro Finder</h2>
          <p>
            Metro Finder is your personal digital guide to navigating busy city metro systems. Whether you're
            a local commuter, a new resident, or a tourist visiting a new city, this app is built to make
            metro travel simple and seamless. Gone are the days of confusing maps and crowded information
            boards. With real-time data and intelligent features, Metro Finder empowers users to plan their
            journeys with confidence.
          </p>
          <p>
            Our platform gives you access to up-to-date schedules, live train locations, estimated arrival
            times, and station amenities. With a focus on usability and accessibility, the interface is designed
            to work flawlessly on both mobile and desktop devices. From finding the nearest station to calculating
            your fare, Metro Finder streamlines your journey every step of the way.
          </p>
        </section>
        <div><img
          src={about}
          alt="Metro train"
          className="metro-image"
        /></div>

        <section>
          <h2>Why It Matters</h2>
          <p>
            Urban commuters often face challenges like overcrowding, delays, route confusion, and lack of timely
            information. Metro Finder was built with the idea that technology should eliminate those pain points.
            By aggregating metro system data in one simple interface, we provide a smooth and reliable experience
            that keeps you informed and on time — always.
          </p>
        </section>

        <section>
          <h2>Technologies Behind the Scenes</h2>
          <ul>
            <li>⚛️ React.js – Fast, dynamic UI components</li>
            <li>📡 Live Metro APIs – Real-time schedule and route data</li>
            <li>🗺️ Mapbox/Google Maps – Station locations and route maps</li>
            <li>📱 Responsive Design – Works on all screen sizes</li>
          </ul>
        </section>

        <footer className="about-footer">
          <p>© {new Date().getFullYear()} Metro Finder | Built with care and code 🚇</p>
        </footer>
      </div>
    </div>
  );
};

export default About;



