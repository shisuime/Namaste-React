import { useParams } from "react-router-dom";
import useFetchData from "../common/useFecthData";
import { useState } from "react";

const RestaurantMenu = () => {
  const param = useParams();
  const { restaurantId } = param;

  const new_pizzalist = useFetchData(restaurantId);

  return (
    <>
      <h1>id is {restaurantId}</h1>
      {new_pizzalist?.map((pizza) => (
        <div key={pizza.resID}>
          <h1>{pizza.title}</h1>
        </div>
      ))}
    </>
  );
};

export default RestaurantMenu;
