import React from 'react'
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import app from './firebase';

const Facebook = () => {
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
const handleFb = (e)=>{
  e.preventDefault()
  const auth = getAuth(app);
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
  
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
   console.log(user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
  
      // ...
    });
}

  return (
    <div>
      <button onClick={handleFb} >login with facebook</button>
    </div>
  )
}

export default Facebook
