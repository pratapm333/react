import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

 

const useMovieTrailer = (movieId) => {
   
    const dispatch = useDispatch();
    const getMoviesVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
 
        const filterData = json.results.filter(video => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0];
       
      

        dispatch(addtrailerVideo(trailer));
    }

   
    useEffect(()=>{
        getMoviesVideos();
    },[])

}

export default useMovieTrailer;