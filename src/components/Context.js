// context.js
import React, { createContext, useContext ,useState} from 'react';

const MyContext = createContext();

export function useMyContext() {
  return useContext(MyContext);
}


export function MyProvider({ children }) {
  // Define your shared state here
  const [sharedData, setSharedData] = useState(null);
  console.log(sharedData,"context data here")
  const updateShareData =(newdata)=>{
    setSharedData(newdata)
  }

  return (
    <MyContext.Provider value={{ sharedData, updateShareData }}>
      {children}
    </MyContext.Provider>
  );
}
