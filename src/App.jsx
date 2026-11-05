import React, { useEffect, useState } from 'react';
// fec2dbf4
import MovieCard from './MovieCard';
import "./index.css";
import "./app.css";
import img from "./images/search_icon.png";



const API_URL = 'http://www.omdbapi.com?apikey=fec2dbf4';


const App = () => {

    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    }


    return (
    
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
                <input placeholder='Search for Movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <img src={img} alt="search" onClick={() => searchMovies(searchTerm)} />
            </div>
            {
            movies?.length > 0 ? (
                <div className='container'>
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className='empty'>
                    <h2>No movies found</h2>
                </div>
            )
            }   
        </div>
    );
}


export default App;