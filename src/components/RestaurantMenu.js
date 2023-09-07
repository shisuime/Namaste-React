
import { useParams } from "react-router-dom";


import { useState ,useEffect} from "react";


const RestaurantMenu =()=>{
    const param=useParams();
    const {restaurantId}=param
    
    var i=0
    const [pizzalist,Setpizzalist]=useState([])

  useEffect(()=>{
   getRestaurants()
  },[])
  
  async function getRestaurants(){

    const data = await fetch("https://api.pizzahut.io/v1/content/products?sector=in-1&locale=en-in");
    const json = await data.json()
    const slicedData= json.slice(0,21)
    
    for(var childkey in slicedData){
      if(slicedData.hasOwnProperty(childkey)){
        slicedData[childkey].resID=i++
      }
    }
    
    
    
    const filteredList= slicedData.filter((item)=>item.resID == restaurantId)
    console.log(filteredList,"filteredlist from restaurantmenu here")
    Setpizzalist(filteredList)

  }
        
    
       
    
    
    return(
        <>
            <h1>id is {restaurantId}</h1>
            {pizzalist.map((pizza) => (
        <div key={pizza.resID}>
          <h1>{pizza.title}</h1>
        </div>
      ))}
        </>
    )
}



export default RestaurantMenu;