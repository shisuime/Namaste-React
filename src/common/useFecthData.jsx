import { useState, useEffect } from "react";

const useFetchData = (restaurantId) => {
  const [resInfo, setResInfo] = useState(null); // Initialized as `null` since data seems to be an object

  useEffect(() => {
    if (restaurantId) {
      getRestaurants();
    }
  }, [restaurantId]);

  async function getRestaurants() {
    try {
      // Reset resInfo to null before fetching new data
      setResInfo(null);

      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${restaurantId}`
      );

      if (!data.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await data.json();

      // Check if the expected structure exists before setting it
      if (json?.data) {
        setResInfo(json?.data); // Set the fetched data
      } else {
        console.error("Unexpected data structure", json);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return resInfo; // Return the fetched restaurant info
};

export default useFetchData;
