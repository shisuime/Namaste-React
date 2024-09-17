import Simmer from "./Simmer";
import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";
import { useMyContext } from "./Context";
import { Link } from "react-router-dom";
import { filterData } from "../common/filter";
import useOnline from "../common/useOnline";

const dummyarray = [];
for (let i = 0; i <= 13; i++) {
  dummyarray.push(i);
}

const Body = () => {
  const [Searchtxt, setSearchtxt] = useState("");
  const [FilteredRestraunt, SetFilteredRestraunt] = useState([]);
  const [pizzaList, setPizzaList] = useState([]);
  const { updateShareData } = useMyContext();

  useEffect(() => {
    getRestaurants();
  }, []);
  // "https://api.pizzahut.io/v1/content/products?sector=in-1&locale=en-in"
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      "dwad",
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
      FilteredRestraunt
    );
    // const slicedData = json.slice(0, 21);
    // var i = 0;

    // for (var childkey in slicedData) {
    //   if (slicedData.hasOwnProperty(childkey)) {
    //     slicedData[childkey].resID = i++;
    //   }
    // }
    updateShareData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setPizzaList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    SetFilteredRestraunt(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  const online = useOnline();
  // console.log(online, "status here");
  if (!online) {
    return <h1>Offline please check your internet connection</h1>;
  }
  // console.log(FilteredRestraunt, "checking ");

  return pizzaList?.length === 0 ? (
    <div className="restraunt-list">
      {dummyarray.map((idx) => {
        return <Simmer key={idx} />;
      })}
    </div>
  ) : (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row gap-2">
        <input
          type="text"
          className="border-solid border-2 border-black"
          value={Searchtxt}
          onChange={(e) => setSearchtxt(e.target.value)}
        />
        <button
          className="bg-blue-300 w-20 shadow-lg rounded-sm"
          onClick={() => {
            const updatedData = filterData(Searchtxt, pizzaList);

            SetFilteredRestraunt(updatedData);
          }}
        >
          search{" "}
        </button>
      </div>

      {FilteredRestraunt?.length === 0 ? (
        <h1> No Restaurants Found</h1>
      ) : (
        <div className="flex flex-wrap gap-10">
          {FilteredRestraunt &&
            FilteredRestraunt.map((restraunt) => {
              return (
                <Link
                  to={"/restaurant/" + restraunt.resID}
                  key={restraunt?.info?.id}
                >
                  <RestrauntCard resData={restraunt?.info} />
                </Link>
              );
              // return <Simmer />
            })}
        </div>
      )}
    </div>
  );
};

export default Body;
