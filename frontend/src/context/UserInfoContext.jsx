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

_id:
"66ccbf17028c54a908a4e014",
fullName:
"Sourav Dey",
email:
"sourav@gmail.com",

resumes
:[],
subscribed:
true})

      }
      catch(err){
        console.log(err)
      }
    }
    
    return (<UserInfoContext.Provider value={{user,setUser}}>
      {children}
    </UserInfoContext.Provider>)
}