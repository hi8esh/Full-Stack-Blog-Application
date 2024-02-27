import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA86glPaq_gtg3IVuuJwliRIZAg4fCM-7E",
  authDomain: "my-react-blog-2cc56.firebaseapp.com",
  projectId: "my-react-blog-2cc56",
  storageBucket: "my-react-blog-2cc56.appspot.com",
  messagingSenderId: "978297429373",
  appId: "1:978297429373:web:e6b96943e9941ffeb50014"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
