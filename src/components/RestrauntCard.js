import { CDN_URL } from "../utils/constants";

const RestrauntCard = ({ resData }) => {
  console.log(resData, "avb");
  return (
    <div className="m-4 p-4 w-[250px] h-[350px] bg-gray-200 hover:w-[260px]  transition-all duration-300">
      <img src={`${CDN_URL + resData.cloudinaryImageId}`}></img>
      <h1>{resData?.name}</h1>
      <h2>{resData?.locality}</h2>
      <h3>{resData?.type}</h3>
    </div>
  );
};

export default RestrauntCard;
