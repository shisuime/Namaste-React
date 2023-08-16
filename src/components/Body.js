import { restrauntlist } from "../config";
import RestrauntCard from "./RestrauntCard";
import { useState } from "react";

function filterData(searchtext,restrauntlist){
  const searchtextLower=searchtext.toLowerCase()
const filteredData= restrauntlist.filter((restraunt)=>restraunt.data.name.toLowerCase().includes(searchtextLower));

return filteredData
}
const Body = () => {
  const [Searchtxt,setSearchtxt]=useState("");
  const [FilteredRestraunt,SetFilteredRestraunt]=useState(restrauntlist)
  
  
    return (
      
      <>
      
      <div className="search-box">
        <input type="text" className="search-input" value={Searchtxt} onChange={
          (e)=>
          setSearchtxt(e.target.value) 
          } />
      </div>
      
      <button className="search-button"
      onClick={() => {
        const updatedData=filterData(Searchtxt,restrauntlist);
        
        SetFilteredRestraunt(updatedData)

      }}
      >search </button>
      <div className="restraunt-list">
        {FilteredRestraunt.map((restraunt)=>{
          return(
            <RestrauntCard {...restraunt.data} key={restraunt.data.id}/>
          )
        })}
      </div>
      </>
    );
  };

export default Body;  