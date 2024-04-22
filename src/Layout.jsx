import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Home from "./Home";
import { useState } from "react";
import { createContext } from "react";
import Login from "./Login"
import Facebook from "./Facebook";
export  const LoginContext = createContext()
const Layout = () => {
  let [isLogin,setLogin] = useState(false)
 console.log(isLogin);
  return (
    <div>
   {/* <LoginContext.Provider value={{isLogin,setLogin}} >
   
   <BrowserRouter>
          <Routes>
          
          <Route path="/" element={isLogin ? <Home /> : <Signup />} />        
          {!isLogin ? <Route path="/login" element={<Login/>} />   : "" } 
          </Routes>
        </BrowserRouter>
   </LoginContext.Provider> */}
 <Facebook/>
    </div>
  );
};

export default Layout;
