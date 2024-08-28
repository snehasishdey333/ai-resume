import axios from "axios";
import { createContext, useEffect, useState } from "react";



export const UserInfoContext=createContext({})


export function UserContextProvider({children}){
    const [user,setUser]=useState(null)
    
    useEffect(()=>{
      getUser()

    },[])

    const getUser=async()=>{
      try{
        // const res=await axios.get(import.meta.env.VITE_BACKEND_URL+"/api/auth/refetch")
        setUser({
email
: 
"ratna@gmail.com",
fullName
: 
"Ratna Das",
resumes
: 
[],
subscribed
: 
true,
updatedAt
: 
"2024-08-28T17:32:05.022Z"
,
_id
: 
"66cf5f14b8d37fea70e46583"})

      }
      catch(err){
        console.log(err)
      }
    }
    
    return (<UserInfoContext.Provider value={{user,setUser}}>
      {children}
    </UserInfoContext.Provider>)
}