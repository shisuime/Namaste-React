import ItemList from "./ItemList";
import React from "react";

const RestaurantCategory = ({ data, isOpen, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer">
        <div className="flex justify-between" onClick={handleClick}>
          <span data-testid="abc" className="font-bold text-lg">
            {data?.title}({data?.itemCards?.length})
          </span>
          <span>V</span>
        </div>
        {isOpen && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
