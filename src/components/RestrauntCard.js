const RestrauntCard = ({ img, title, desc, type }) => {
    return (
      <div className="card">
        <img src={img}></img>
        <h1>{title}</h1>
        <h2>{desc}</h2>
        <h3>{type}</h3>
      </div>
    );
  };

 export default RestrauntCard; 