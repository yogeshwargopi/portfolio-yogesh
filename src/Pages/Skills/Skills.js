import * as React from "react";
import "./Skills.css";
import node from "../../assets/node3.png";
import aws from "../../assets/aws.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.webp";
import react from "../../assets/react.png";
import express from "../../assets/express.png";
import mongo from "../../assets/mongodb1.png";
import firebase from "../../assets/firebase.png";
import figma from "../../assets/figma.png";

const Skills = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className={`skill ${isVisible ? "fade-in" : ""}`}>
      <div className="scardion">
        <div className="scardion_title">
          <p>Skills</p>
        </div>
        <div>
          <hr className="hrtag" />
        </div>
        <div className="scardion_content">
          <div className="scard">
            <img src={node} alt="hii" />
            <div className="scard-content">
              <h3>node Js</h3>
            </div>
          </div>
          <div className="scard">
            <img src={react} alt="hii" />
            <div className="scard-content">
              <h3>React Js</h3>
            </div>
          </div>
          <div className="scard">
            <img src={express} alt="hii" />
            <div className="scard-content">
              <h3>Express Js</h3>
            </div>
          </div>
          <div className="scard">
            <img src={mongo} alt="hii" />
            <div className="scard-content">
              <h3>Mongo DB</h3>
            </div>
          </div>
          <div className="scard">
            <img src={firebase} alt="hii" />
            <div className="scard-content">
              <h3>Firebase</h3>
            </div>
          </div>
          <div className="scard">
            <img src={aws} alt="hii" />
            <div className="scard-content">
              <h3>AWS</h3>
            </div>
          </div>
          <div className="scard">
            <img src={figma} alt="hii" />
            <div className="scard-content">
              <h3>Figma</h3>
            </div>
          </div>
          <div className="scard">
            <img src={js} alt="hii" />
            <div className="scard-content">
              <h3>JavaScript</h3>
            </div>
          </div>
          <div className="scard">
            <img src={html} alt="hii" />
            <div className="scard-content">
              <h3>HTML</h3>
            </div>
          </div>
          <div className="scard">
            <img src={css} alt="hii" width={100} />
            <div className="scard-content">
              <h3>css</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
