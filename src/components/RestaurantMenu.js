import { useParams } from "react-router-dom";


const RestaurantMenu =()=>{
    const param=useParams();
    const {resId}=param
    return(
        <div>
            <h1>id is {resId}</h1>
        </div>
    )
}

export default RestaurantMenu;