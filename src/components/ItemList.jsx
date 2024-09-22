import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b-2 text-left"
        >
          <div>
            <span className="p-2">{item?.card?.info?.name}</span>
            <span>{item?.card?.info?.defaultPrice}</span>
          </div>
          <p className="text-xs ">{item?.card?.info?.description}</p>
          <button
            className="border-solid border-[1px] border-black w-20 flex justify-center"
            onClick={() => handleAddItem(item)}
          >
            + Add
          </button>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
