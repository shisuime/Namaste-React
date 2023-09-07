import Simmer from "./Simmer";
import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";
import { useMyContext } from "./Context";
import { Link } from "react-router-dom";


const dummyarray=[]
for(let i=0;i<=13;i++){
dummyarray.push(i)
}


function filterData(searchtext,slicedData){
  const searchtextLower=searchtext.toLowerCase()
const filteredData= slicedData.filter((restraunt)=>restraunt.title.toLowerCase().includes(searchtextLower));
return filteredData
}
const Body = () => {
  const [Searchtxt,setSearchtxt]=useState("");
  const [FilteredRestraunt,SetFilteredRestraunt]=useState([])
  const [pizzaList,setPizzaList]=useState([])
  const {updateShareData}=useMyContext()
  
  var i=0

  useEffect(()=>{
   getRestaurants()
  },[])
  
  async function getRestaurants(){

    const data = await fetch("https://api.pizzahut.io/v1/content/products?sector=in-1&locale=en-in");
    const json = await data.json()
    const slicedData= json.slice(0,21)
    console.log(slicedData,"json here")
    for(var childkey in slicedData){
      if(slicedData.hasOwnProperty(childkey)){
        slicedData[childkey].resID=i++
      }
    }
    console.log(slicedData,"body data here")
    updateShareData(slicedData)
    setPizzaList(slicedData)
    SetFilteredRestraunt(slicedData)
    

  }
  console.log(pizzaList,"pizzalist here")
    
    return (pizzaList?.length===0)? 
    <div className="restraunt-list">
    {dummyarray.map((restraunt)=>{
      
      return <Simmer />
      
    })}
  </div>:(
      
      <>
      
      <div className="search-box">
        <input type="text" className="search-input" value={Searchtxt} onChange={
          (e)=>
          setSearchtxt(e.target.value) 
          } />
      </div>
      
      <button className="search-button"
      onClick={() => {
        const updatedData=filterData(Searchtxt,pizzaList);
        
        SetFilteredRestraunt(updatedData)

      }}
      >search </button>
      {(FilteredRestraunt?.length) === 0 ? <h1> No Restaurants Found</h1> :
      <div className="restraunt-list">
        {FilteredRestraunt.map((restraunt)=>{
          return <Link to={"/restaurant/"+restraunt.resID} key={restraunt.resID}><RestrauntCard {...restraunt} key={restraunt.id} /></Link>
          // return <Simmer />
          
        })}
      </div>}
      </>
    );
  };

export default Body;  