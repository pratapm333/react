import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlide';
import { LOGO_URL } from '../utils/constants';

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
    <img className="w-44" src={LOGO_URL} alt="logo" />
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