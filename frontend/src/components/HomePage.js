import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HomePage.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the movies!', error);
      });
  }, []);
  console.log("movie", movies);
  return (
    <div className="container">
    <div className='heading'><h1>Movie Homepage</h1></div>
      <div className="homepage">
        {movies.map(movie => (
          <div key={movie._id} className="movie-card">
            <img src={"/images/"+movie.image} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.shortDescription}</p>
            <a href={`/movies/${movie._id}` }>Read More</a>
          </div> 
        ))}
      </div>
    </div>
  );
};

export default HomePage;