import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {auth} from "../utils/firebase"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlide';


const Login = () => {


  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
 

    const message = checkValidData( email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    updateProfile(user, {
      displayName: name.current.value , photoURL: "https://avatars.githubusercontent.com/u/5929359?v=4"
    }).then(() => {
      const {uid, email, displayName, photoURL } = auth.currentUser;
      dispatch(addUser({uid: uid, email:email, displayName:displayName, photoURL: photoURL}));
     navigate("/browse")
    }).catch((error) => {
       setErrorMessage(errorMessage);
    });
 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
    
  });
    } else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
     console.log(user)
     navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+errorMessage);
  });

    }

  };

  const toggleSignInForm = () => {
    setIsSignInForm( !isSignInForm)
  }
   
  return (

   
    <div>
        <Header />
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg" alt="background" />
        
        </div>

        <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
          <h1 className='font-bold text-3xl py-4 m-2 '>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
         {!isSignInForm && (
          <input type='name' ref={name} placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>
         )} 
          <input type='email' ref={email} placeholder='Email' className='p-4 my-4 w-full bg-gray-700'/>
          <input type='password' ref={password} placeholder='Password' className='p-4 my-4 w-full bg-gray-700 '/>
          
          <p className='text-red-500 text-lg font-bold'>{errorMessage}</p>
          <button className='p-4 my-4 bg-red-700 w-full' onClick={handleButtonClick}>Sign In </button>
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm ? "New to Netflix? Sign up now" : "Already Registered! Sign In now"}
          
            </p>
        </form>
    </div>
  )
}

export default Login;