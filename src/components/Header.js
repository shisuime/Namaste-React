import { useState } from "react";
import { Link } from "react-router-dom";

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
    const [isLoggedIn,setisLoggedIn]=useState(false)
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/instamart">Instamart</Link></li>
          </ul>
        </div>
        {isLoggedIn? <button onClick={()=>setisLoggedIn(false)}>Log Out</button>:<button onClick={()=>setisLoggedIn(true)}>Log In</button>}
      </div>
    );
  };

  export default Headercomponent;