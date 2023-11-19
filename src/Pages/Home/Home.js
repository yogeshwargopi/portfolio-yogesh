import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const roles = ["DEVELOPER", "DESIGNER"];
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  const handleButton = (event) => {
    event.preventDefault();
    navigate("/contact");
  };
  return (
    <div className={`home_page ${isVisible ? "float-in" : ""}`}>
      <div className="home_content">
        <h1>
          YOGESHWAR <span id="two">GOPI</span>
        </h1>
        <p>
          <span id="one">WEB</span>
          <span id="three">{roles[index]}</span>
        </p>
        <button onClick={handleButton}>Get in touch</button>
      </div>
    </div>
  );
};

export default Home;
