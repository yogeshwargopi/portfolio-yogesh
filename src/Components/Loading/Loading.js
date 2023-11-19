// Example loading component in React

import React from "react";
import "./Loading.css"; // Create a separate CSS file for loading styles

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default Loading;
