import { CDN_URL } from "../utils/constants";
const RestrauntCard = ({ cloudinaryImageId, name, avgRatingString, type }) => {
  return (
    <div className="m-4 p-4 w-[250px] h-[350px] bg-gray-200 hover:w-[260px]  transition-all duration-300">
      <img src={CDN_URL + cloudinaryImageId}></img>
      <h1>{name}</h1>
      <h2>{avgRatingString}</h2>
      <h3>{type}</h3>
    </div>
  );
};

export const withOpenLabel = (RestrauntCard) => {
  return ({ resData }) => {
    return (
      <div>
        <div className="absolute bg-black text-white">open</div>
        <RestrauntCard {...resData} />
      </div>
    );
  };
};

export default RestrauntCard;
