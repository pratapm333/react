import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlide';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(store => store.user)
  const handleSignOut = () =>{
    signOut(auth).then(() => {
     
    }).catch((error) => {
      navigate("/error");
    });
  }

  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
           
          const {uid, email, displayName, photoURL } = user;
          dispatch(addUser({uid: uid, email:email, displayName:displayName, photoURL: photoURL}));
          navigate("/browse")
        } else {
          dispatch(removeUser()); 
          navigate("/");
        }
      });
      return () => unsubscribe();
}, [])

  return  (
  <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
    <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
    {user && (
    <div className='flex p-2'>
      <img className='w-12 h-12 m-2 ' alt='userIcon' src={user?.photoURL} />
    <button onClick={handleSignOut} className='font-bold text-white'>Signout</button>
    </div>
    )}
</div>
) 
   
}

export default Header;