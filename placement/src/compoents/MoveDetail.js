import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/movies/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(err => console.error('Error fetching movie:', err));
  }, [id]);

  if (!movie) return <p>Loading movie...</p>;

  const releaseDate = new Date(movie.release_date).toLocaleDateString();
  const runtimeMins = movie.runtime ? `${movie.runtime} mins` : "N/A";

  return (
    <div style={{ padding: "20px" }}>
      <h2>{movie.title}</h2>
      <p><strong>Tagline:</strong> {movie.tagline}</p>
      <p><strong>Overview:</strong> {movie.overview}</p>
      <p><strong>Release Date:</strong> {releaseDate}</p>
      <p><strong>Runtime:</strong> {runtimeMins}</p>
      <p><strong>Vote Average:</strong> {movie.vote_average}/10</p>
      <p><strong>Status:</strong> {movie.status}</p>
      <p><strong>Language:</strong> {movie.original_language}</p>
      <button onClick={() => navigate(-1)} style={{ marginTop: "20px" }}>
        ← Back to List
      </button>
    </div>
  );
}

export default MovieDetail;
