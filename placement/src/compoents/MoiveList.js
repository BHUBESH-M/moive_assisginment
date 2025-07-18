import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieList.css'; // for custom styling

function MovieList() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/api/movies')
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(err => console.error('Error fetching movies:', err));
  }, []);

  return (
    <div className="movie-list">
      <h2>Movie List</h2>
      <div className="movie-grid">
        {movies.map(movie => (
          <div
            className="movie-card"
            key={movie.id}
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <h3>{movie.title}</h3>
            <p><em>{movie.tagline}</em></p>
            <p>⭐ {movie.vote_average}/10</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
