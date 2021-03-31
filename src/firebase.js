import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: "AIzaSyC0YfVIryRbtE8vhGunEIvMSL_Vi3mMnxI",
  authDomain: "modern-ecommerce.firebaseapp.com",
  projectId: "modern-ecommerce",
  storageBucket: "modern-ecommerce.appspot.com",
  messagingSenderId: "882397551591",
  appId: "1:882397551591:web:e23faa740c0b4a4a27fb42",
  measurementId: "G-ZQKREYV981"
})

export const auth = app.auth()
export default app