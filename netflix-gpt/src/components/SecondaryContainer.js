import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)
  return (
  movies.nowPlayingMovies &&  (
    <div className='bg-black'>
        
        <div className='-mt-72 pl-12 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>       
        <MovieList title={"Popular"} movies={movies.nowPopularMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies.nowUpcomingMovies}/>
        
        <MovieList title={"Horror"} movies={movies.nowHorrorMovies}/>
        <MovieList title={"Trending"} movies={movies.nowTrendingMovies}/>
        </div>
    </div>
   )
  );
};

export default SecondaryContainer