

import React,{ useEffect, useState} from "react";

import App from "../../App";
import UsersDetail from "./UsersDetail";


 export default function UserDetailData(){
  const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);

 
  
   useEffect(()=>{

    fetch("http://localhost:5000/userData" ,{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"Application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data,"userData");
      if(data.data.userType=="Admin"){
        setAdmin(true);
      }
      setUserData(data, "userData");
    
    });
  
 },[])

    
      return (
        <>
        
          
          {admin ? <UsersDetail/>  :<App />}
          

        </>
      );
    }
  
