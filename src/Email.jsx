// import React from 'react'
// import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

// const Email = () => {
   
// const email = "asadullahabbasi225@gmail.com"
//     const actionCodeSettings = {
//         // URL you want to redirect back to. The domain (www.example.com) for this
//         // URL must be in the authorized domains list in the Firebase Console.
//         url: 'https://asad-reactproject02-currencygenerator.netlify.app/',
//         // This must be true.
//         handleCodeInApp: true,
//         iOS: {
//           bundleId: 'com.example.ios'
//         },
//         android: {
//           packageName: 'com.example.android',
//           installApp: true,
//           minimumVersion: '12'
//         },
//         dynamicLinkDomain: 'https://asad-reactproject02-currencygenerator.netlify.app/'
//       };
// const auth = getAuth();
// sendSignInLinkToEmail(auth, email, actionCodeSettings)
//   .then(() => {
//     // The link was successfully sent. Inform the user.
//     // Save the email locally so you don't need to ask the user for it again
//     // if they open the link on the same device.
//     window.localStorage.setItem('emailForSignIn', email);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode);
//     // ...
//   });


//   return (
//     <div>

//     </div>
//   )
// }

// export default Email
import React from 'react';
import { getAuth, signInWithPopup, signInWithRedirect ,GoogleAuthProvider } from "firebase/auth";

const Email = () => {
  const auth = getAuth();
  
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        // The email of the user's account used.
        const email = error.customData?.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Email;
