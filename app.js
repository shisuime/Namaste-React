import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Headercomponent from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";



const Applayout = () => {
  return (
    <>
      <Headercomponent />
      <Body />
      <Footer />
    </>
  );
};

const doc = document.getElementById("root");
const root = ReactDOM.createRoot(doc);
root.render(<Applayout />);
