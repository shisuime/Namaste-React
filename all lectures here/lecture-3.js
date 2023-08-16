import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

const Header = () => {
  return (
    <div className="title">
      <div className="logo">
        <img src="ds_circle_logo.png" />
      </div>
      <input type="text" className="search-bar" />
      <div className="user-icon">
        <img src="ds]_circle_logo.png" />
      </div>
    </div>
  );
};

const doc = document.getElementById("root");
const root = ReactDOM.createRoot(doc);
root.render(<Header />);
