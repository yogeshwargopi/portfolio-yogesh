// App.js
import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";
import Contact from "./Pages/Contact/Contact";
import Practice from "./Pages/practice/Proatice";
import "./App.css"; // Add a CSS file for styling

const App = () => {
  return (
    <div className="app-container">
      <video autoPlay muted loop id="myVideo" className="background-video">
        <source src={require("./assets/background.mp4")} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="content">
        <div className="nav_bar">
          <Navbar />
        </div>
        <div className="project_body">
          <Outlet />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/practice" element={<Practice />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
