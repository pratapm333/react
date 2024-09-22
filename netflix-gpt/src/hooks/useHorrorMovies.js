import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addHorrorMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useHorrorMovies = () => {

    const dispatch = useDispatch();

    const getHorrorMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=a86a95f9b78ec540d9b4e1e83f32218f&with_genres=27", API_OPTIONS);
    const json = await data.json();
 
    dispatch(addHorrorMovies(json.results));
  }

  useEffect(()=>{
    getHorrorMovies();
  }, [])
}

export default useHorrorMovies;