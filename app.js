import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

const restrauntlist = [
  {
    type: "restraunt",
    data: {
      id: "1",
      name: "KFC",
      cuisines: ["american", "african", "UK"],
      url: "https://b.zmtcdn.com/data/dish_photos/9a0/059948680cdf47aa44340a4a32b2c9a0.jpg",
      rating: "4.2",
    },
  },
  {
    type: "restraunt",
    data: {
      id: "2",
      name: "DOMINO'S",
      cuisines: ["american", "Finnish", "UK"],
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf7civQwlYK8f8dsnmiOJA97HkXzM-6rAu6Q&usqp=CAU",
      rating: "5.2",
    },
  },
  {
    type: "restraunt",
    data: {
      id: "3",
      name: "PIZZA HUT",
      cuisines: ["american", "indian", "UK"],
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1yYV_3C-gKvsMJrPbsD9vuRvjr5fiFhJYtQ&usqp=CAU",
      rating: "3.2",
    },
  },
];

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://imageio.forbes.com/specials-images/imageserve/61db66d0faa11c03fff8d8c0/McDonald-s-French-Fries/0x0.jpg?format=jpg&crop=1976,1391,x19,y247,safe&width=960"
    ></img>
  </a>
);

const Headercomponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>home</li>
          <li>about us</li>
          <li>contacts</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestrauntCard = ({ url, name, cuisines, rating }) => {
  return (
    <div className="card">
      <img src={url}></img>
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{rating}</h3>
    </div>
  );
};
const Body = () => {
  return (
    <div className="restraunt-list">
      <RestrauntCard {...restrauntlist[0].data} />
      <RestrauntCard {...restrauntlist[1].data} />
      <RestrauntCard {...restrauntlist[2].data} />
    </div>
  );
};

const Footer = () => {
  return <h1>footer</h1>;
};
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
