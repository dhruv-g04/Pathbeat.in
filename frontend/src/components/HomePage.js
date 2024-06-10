import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HomePage.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
  
  useEffect(() => {
    axios.get(`${BACKEND_URL}/movies`)
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the movies!', error);
      });
  }, [BACKEND_URL]);

  return (
    <div className="container">
      <div className='heading'><h1>Movie Homepage</h1></div>
      <div className="homepage">
        {movies.map(movie => (
          <div key={movie._id} className="movie-card">
            <img src={`/images/${movie.image}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.shortDescription}</p>
            <a href={`/movies/${movie._id}`}>Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
