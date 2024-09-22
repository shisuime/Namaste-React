import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //   console.log(cartItems, "items");
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">CART</h1>
      <button
        className="border-black border-solid border-[1px] bg-black text-white"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div>{cartItems && <ItemList items={cartItems} />}</div>
    </div>
  );
};

export default Cart;
