import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../common/useFecthData";
import React from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null); // Initialize with null (no open category)
  const param = useParams();
  const { restaurantId } = param;

  const resInfo = useFetchData(restaurantId);
  const {
    name = "",
    cuisines = [],
    costForTwo = "",
  } = resInfo?.cards[2]?.card?.card?.info || {};

  const menuCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories = menuCards?.filter(
    (e) =>
      e?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  // Function to handle the toggling logic
  const handleToggle = (idx) => {
    if (idx === showIndex) {
      // If the clicked category is already open, close it (set showIndex to null)
      setShowIndex(null);
    } else {
      // Otherwise, open the clicked category
      setShowIndex(idx);
    }
  };

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwo}
      </p>
      {categories?.map((category, idx) => {
        return (
          <RestaurantCategory
            key={idx}
            data={category?.card?.card}
            isOpen={idx === showIndex} // Open only if this category is selected
            setShowIndex={() => handleToggle(idx)} // Use handleToggle for click handling
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
