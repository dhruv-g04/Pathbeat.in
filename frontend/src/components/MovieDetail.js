import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MovieDetail.css';
import Footer from './Footer'; 

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

  useEffect(() => {
    axios.get(`${BACKEND_URL}/movies/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the movie details!', error);
        setMovie({}); // Set an empty object in case of error to avoid undefined errors
      });
  }, [id, BACKEND_URL]);

  return (
    <div className="container">
      <div className="movie-detail">
        <h1>{movie.title}</h1>
        <img src={`/images/${movie.image}`} alt={movie.title} />
        <p>{movie.longDescription}</p>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetail;
