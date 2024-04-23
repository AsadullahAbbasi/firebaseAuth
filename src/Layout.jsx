import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Home from "./Home";
import { useState } from "react";
import { createContext } from "react";
import Login from "./Login"
export  const LoginContext = createContext()
const Layout = () => {
  let [isLogin,setLogin] = useState(false)
 console.log(isLogin);
  return (
    <div>
   <LoginContext.Provider value={{isLogin,setLogin}} >
   
   <BrowserRouter>
          <Routes>
          
          <Route path="/" element={isLogin ? <Home /> : <Signup />} />        
          {isLogin === false ? <Route path="/login" element={<Login/>} />   : "" } 
          </Routes>
        </BrowserRouter>
   </LoginContext.Provider>

    </div>
  );
};

export default Layout;
