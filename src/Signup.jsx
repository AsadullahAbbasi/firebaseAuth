import React, { useEffect, useState } from "react";
import Login from "./Login";
import app from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { Link } from "react-router-dom";
import Facebook from "./Facebook";



const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isSignup, setisSignup] = useState(false);
  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, emailVerified, uid } = user;
        console.log(
          "User is signed in:",
          displayName,
          email,
          emailVerified,
          uid,
          user
        );

        if (emailVerified) {
          console.log("Email is verified!");
         
        } else {
          console.log("Email is not verified.");
        }
      } 
    });

    return () => unsubscribe();
  }, []);
  const handleChange = (e) => {
    let { name, value } = e.target;
    name === "email" ? setemail(value) : "";
    name === "password" ? setpassword(value) : "";
    console.log(email, password);
  };
  const auth = getAuth(app);
  const signupHandeler = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        sendEmailVerification(auth.currentUser).then(() => {
          console.log("Email verification sent!");
          setisSignup(true);
          // ...
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
  
      });
  };

  return (
    <section>

      {isSignup ? (
        <Login />
      ) : (
        <section>
          <div className="max-w-[572px] mx-auto">
            <form action="" className="flex flex-col gap-8">
              <label>
                email :
                <input
                  type="email"
                  value={email}
                  onChange={(e) => handleChange(e)}
                  id="email"
                  className="border-1"
                  placeholder="email"
                  name="email"
                />
              </label>

              <label>
                password :
                <input
                  name="password"
                  value={password}
                  className="border-1"
                  autoComplete="current-password"
                  type="password"
                  id="password"
                  placeholder="password"
                  onChange={(e) => handleChange(e)}
                />
              </label>

              <button className="text-left" onClick={(e) => signupHandeler(e)}>
                Signup
              </button>
            </form>
            <Link to="/login" > Login </Link>
          </div>
        </section>
      )}
      <Facebook/>
    </section>
  );
};
export default Signup;

