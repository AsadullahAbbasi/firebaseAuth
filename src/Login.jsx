import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebase";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "./Layout";
const Login = () => {
  const { setLogin } = useContext(LoginContext);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  console.log(email, password);

  const loginHandler = (e) => {
    e.preventDefault();

    const auth = getAuth(app);
  console.log(e);
  signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;

          console.log("User logged in:", user);
          setLogin(true);
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Login error:", errorCode, errorMessage);
        });
  // auth.currentUser.reload().then(() => {
  //   const isEmailVerified = auth.currentUser.emailVerified;
  //   if (isEmailVerified) {
      
  //   } else {
  //     console.log("Email is not verified.");
  //   }
  // });
    // if (auth.currentUser) {
 
    // }
  };

  return (
    <div>
      <div>
        <p>
          A verification email has been sent to your email. Please verify then
          login.
        </p>
      </div>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="email"
          />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            autoComplete="current-password"
            type="password"
            id="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          <button onClick={(e) => loginHandler(e)}>Login</button>
        </div>
      </form>
      
    </div>
  );
};

export default Login;
