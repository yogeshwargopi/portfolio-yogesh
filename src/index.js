// index.js
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Loading from "./Components/Loading/Loading";

// Use createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById("root"));

const RootComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to demonstrate the loading animation
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Set the delay time in milliseconds

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <BrowserRouter>
      <React.StrictMode>{loading ? <Loading /> : <App />}</React.StrictMode>
    </BrowserRouter>
  );
};

root.render(<RootComponent />);
