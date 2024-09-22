import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlide';
import { LOGO_URL, Supported_Languages } from '../utils/constants';
import { toggleGPTSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(store => store.user)
  const showGPTSearch = useSelector((store)=> store.gpt.showGPTSearch);
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

const handleGPTSearchClick = () => {
  dispatch(toggleGPTSearchView());
}

const handleLangChange = (e) => {
  dispatch(changeLanguage(e.target.value))
}

  return  (
  <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
    <img className="w-44" src={LOGO_URL} alt="logo" />
    {user && (
    <div className='flex p-2'>
      {showGPTSearch && <select className='bg-gray-500 p-2 text-white m-2' onChange={handleLangChange}>
        {Supported_Languages.map(lang=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        
      </select>}
      <button className='bg-purple-800 py-2 px-4 mx-4 my-2 text-white rounded-lg'
      onClick={handleGPTSearchClick}> {showGPTSearch ?  "Home Page" : "GPT Search"  }</button>
      <img className='w-12 h-12 m-2 ' alt='userIcon' src={user?.photoURL} />
    <button onClick={handleSignOut} className='font-bold text-white'>Signout</button>
    </div>
    )}
</div>
) 
   
}

export default Header;