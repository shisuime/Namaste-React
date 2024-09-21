import ItemList from "./ItemList";

const RestaurantCategory = ({ data, isOpen, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div
        className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>V</span>
        </div>
        {isOpen && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
