import React, { useEffect, useState } from "react";
import about from "../../assets/about.jpg";
import "./About.css";
import Model from "../../Components/Model/Model";

const About = () => {
  const roles = ["DEVELOPER", "DESIGNER"];
  const [index, setIndex] = useState(0);
  const [basicModal, setBasicModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="about">
      <div className="about_container">
        <div className="about_image">
          <img src={about} alt="new" width={300} height={400} />
        </div>
        <div className="about_content">
          <h1>
            YOGESHWAR<span id="aone">GOPI</span>
          </h1>
          <p className="atext">
            <span id="atwo">WEB</span> {roles[index]}
          </p>
          <div className="dotted-line"></div>
          <p id="athree">
            My name is <span id="afour">Yogeshwar Gopi</span>. Looking for a
            challenging career in the field of computer science which provides
            me a platform to present my theoretical and practical knowledge and
            develop my experimental and research skills and extend myself to
            higher work in the field of my technical interests.
          </p>
          <div>
            <button onClick={() => setOpenModal(true)} className="modalButton">
              Learn More
            </button>
            <Model open={openModal} onClose={() => setOpenModal(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
