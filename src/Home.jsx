import React from "react";
import app from "./firebase";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  deleteUser,
} from "firebase/auth";
import { useContext } from "react";
import { LoginContext } from "./Layout";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { setLogin } = useContext(LoginContext);
  const navigate = useNavigate();
  const handleSignout = (e) => {
    const auth = getAuth(app);
    e.preventDefault();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        deleteUser(user);
        // ...
      } else {
        console.log("  // User is signed out");

        // ...
      }
    });
    signOut(auth)
      .then(() => {
        console.log("signout0");
        setLogin(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error, "0");
      });
  };
  return (
    <div>
      This is home page
      <button onClick={handleSignout}>SignOut</button>
    </div>
  );
};

export default Home;
