import { useState,useEffect } from "react"

const useOnline = ()=>{


    const [isOnline,SetisOnline]=useState(true);


    useEffect(()=>{
        const sethandleonline=()=>{SetisOnline(true)}
        const sethandleoffline=()=>{SetisOnline(false)}
        
        window.addEventListener("online",sethandleonline );
        window.addEventListener("offline",sethandleoffline );
        return ()=>{
            window.removeEventListener("online",sethandleonline)
            window.removeEventListener("offline",sethandleoffline)
        }
    },[])

    return isOnline
}

export default useOnline