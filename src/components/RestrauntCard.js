const RestrauntCard = ({ img, title, desc, type }) => {
  return (
    <div className="m-4 p-4 w-[250px] h-[350px] bg-gray-200 hover:w-[260px]  transition-all duration-300">
      <img src={img}></img>
      <h1>{title}</h1>
      <h2>{desc}</h2>
      <h3>{type}</h3>
    </div>
  );
};

export default RestrauntCard;
