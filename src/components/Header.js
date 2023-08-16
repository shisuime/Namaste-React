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

  export default Headercomponent;