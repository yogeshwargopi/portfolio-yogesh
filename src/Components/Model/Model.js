import React from "react";
import Resume from "../../assets/resume.png";
import "./Model.css";

const Model = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <img src={Resume} alt="/" />
        <div className="modalRight">
          <p className="closeBtn" onClick={onClose}>
            X
          </p>
        </div>
      </div>
    </div>
  );
};

export default Model;
