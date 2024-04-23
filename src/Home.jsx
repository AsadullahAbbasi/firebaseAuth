import React from 'react'
import app from './firebase';
import { getAuth, signOut ,onAuthStateChanged,deleteUser} from "firebase/auth";
import { useContext } from "react";
import { LoginContext } from "./Layout";
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const { setLogin } = useContext(LoginContext);
  const navigate = useNavigate()
  const handleSignout = (e)=>{
    const auth = getAuth(app);
 e.preventDefault()
 onAuthStateChanged(auth, (user) => {
  if (user) {
 
    const uid = user.uid;
    console.log(uid);
    deleteUser(user)
    // ...
  } else {
  console.log("  // User is signed out");
  setLogin(false);
   navigate("/")
    // ...
  }
});
signOut(auth).then(() => {
  // Sign-out successful.
  console.log("signout");
}).catch((error) => {
  // An error happened.
  console.log(error);
});

  }
  return (
    <div>
      This is home page
      <button onClick={handleSignout} >SignOut</button>
    </div>
  )
}

export default Home
