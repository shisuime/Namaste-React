 export function filterData(searchtext,slicedData){
    const searchtextLower=searchtext.toLowerCase()
  const filteredData= slicedData.filter((restraunt)=>restraunt.title.toLowerCase().includes(searchtextLower));
  return filteredData
  }