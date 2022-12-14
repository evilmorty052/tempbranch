import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { signInWithPhoneNumber, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APP_API_KEY,
//   apiKey: 'AIzaSyAF4G7EWZ7iwj9PNfxYtIzo3P0zQ0G4CeQ',
//   authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_APP_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_APP_ID,
// }

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APP_API_KEY,
  apiKey: 'AIzaSyBZZ5-u5Z9F-Ks_KsgqgW5LSvIihBwDFvo',
  authDomain: 'sideproject-50aa3.firebaseapp.com',
  projectId: 'sideproject-50aa3',
  storageBucket: 'sideproject-50aa3.appspot.com',
  messagingSenderId: '111602191243',
  appId: '1:111602191243:web:91c80631e08476e01cfd8e',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

if (isSignInWithEmailLink(auth, window.location.href)) {
  // Additional state parameters can also be passed via URL.
  // This can be used to continue the user's intended action before triggering
  // the sign-in operation.
  // Get the email if available. This should be available if the user completes
  // the flow on the same device where they started it.
  let email = window.localStorage.getItem('emailForSignIn');
  if (!email) {
    // User opened the link on a different device. To prevent session fixation
    // attacks, ask the user to provide the associated email again. For example:
    email = window.prompt('Please provide your email for confirmation');
  }
  // The client SDK will parse the code from the link for you.
  signInWithEmailLink(auth, email, window.location.href)
    .then((result) => {
      // Clear email from storage.
      window.localStorage.removeItem('emailForSignIn');
      // You can access the new user via result.user
      // Additional user info profile not available via:
      // result.additionalUserInfo.profile == null
      // You can check if the user is new or existing:
      // result.additionalUserInfo.isNewUser
    })
    .catch((error) => {
      // Some error occurred, you can inspect the code: error.code
      // Common errors could be invalid email and invalid or expired OTPs.
    });
}

export const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'https://sideproject-50aa3.web.app/',
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: 'https://sideproject-50aa3.web.app/.ios'
  },
  android: {
    packageName: 'https://sideproject-50aa3.web.app/.android',
    installApp: true,
    minimumVersion: '12'
  },
  dynamicLinkDomain: 'tarararara.page.link'
};

import {  sendSignInLinkToEmail } from "firebase/auth";


