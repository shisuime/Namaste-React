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

 export default RestrauntCard; 