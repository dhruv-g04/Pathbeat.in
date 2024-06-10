import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/movies/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the movie details!', error);
      });
  }, [id]);

  return (
    <div className="container">
      <div className="movie-detail">
        <h1>{movie.title}</h1>
        <img src={"/images/"+movie.image} alt={movie.title} />
        <p>{movie.longDescription}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
