import React, { useEffect, useState } from 'react'
import { toggleMenu } from './utils/appSlice'
import { useDispatch } from 'react-redux'
import { YOUTUBE_SEARCH_API } from './utils/constants';

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");

 

  useEffect(()=>{
    const timer = setTimeout(()=>getSearchSuggestions(), 200)
    return () =>{
      clearTimeout(timer)
    };
   
  }, [searchQuery])

const getSearchSuggestions = async () => {
  
  const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
  const json = await data.json();
  
};

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
 
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex'>
         <img src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg" 
           onClick={() => toggleMenuHandler()} className='h-8 cursor-pointer' alt="menu-logo"></img>
          
           <a href="/">   <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
         className='mx-2  h-8' alt="youtube-logo"></img> </a>
         </div>
      <div className='col-span-10 px-10 text-center '>
        <input className='w-1/2  border border-gray-400 p-2 rounded-l-full' type='text'
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}></input>   
        <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'> 🔍</button> 
        </div>  
        <div className='col-span-1'>
        <img src="https://cdn.vectorstock.com/i/500p/53/41/user-member-social-net-avatar-profile-icon-vector-22965341.avif"
        alt="profile" className='h-8'></img>
        </div>
    </div>
  )
}

export default Head