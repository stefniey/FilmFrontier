import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((m) => String(m.id) === id);

  if (!movie) {
    return <p>No movie details available.</p>;
  }

  return (
    <div className='movie-details-container'>
      <h2 className='movie-title'>{movie.title}</h2>
      <img
        className='movie-poster'
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <h3 className='casts'>Cast</h3>
      <ul className='movie-content'>
        {movie.cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
            <span>{actor.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetails;
