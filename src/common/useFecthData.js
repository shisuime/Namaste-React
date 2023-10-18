import { useState, useEffect } from "react";

const useFetchData = (restaurantId) => {
  const [pizzalist, Setpizzalist] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, [restaurantId]);

  async function getRestaurants() {
    try {
      // Reset pizzalist to an empty array
      Setpizzalist([]);

      const data = await fetch(
        "https://api.pizzahut.io/v1/content/products?sector=in-1&locale=en-in"
      );
      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await data.json();
      const slicedData = json.slice(0, 21);
      let i = 0;

      for (var childkey in slicedData) {
        if (slicedData.hasOwnProperty(childkey)) {
          slicedData[childkey].resID = i++;
        }
      }

      const filteredList = slicedData.filter(
        (item) => item.resID == restaurantId
      );

      Setpizzalist(filteredList);
    } catch (error) {
      console.error("Error fetching data:", error);
      // You can handle the error here, e.g., set an error state.
    }
  }

  return pizzalist;
};

export default useFetchData;
