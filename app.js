import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

const Title = () => <h1>Food Villa</h1>;

const Headercomponent = () => {
  return (
    <div className="header-component">
      <Title />
      <div className="nav-items">
        <ul>
          <li>home</li>
          <li>about us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const doc = document.getElementById("root");
const root = ReactDOM.createRoot(doc);
root.render(<Headercomponent />);
