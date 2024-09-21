const ItemList = ({ items }) => {
  console.log(items, "dta");
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
        </div>
      ))}
    </div>
  );
};
export default ItemList;
