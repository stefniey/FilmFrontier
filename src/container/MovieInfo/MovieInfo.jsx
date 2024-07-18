import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MovieInfo.css';

const MovieInfo = () => {
    const [movieData, setMovieData] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMoreMovies, setHasMoreMovies] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const apiKey = '8c8ebd8ccb239c269dc40231dc7c994f';
                const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${currentPage}`);

                if (response.ok) {
                    const data = await response.json();
                    const movies = data.results;

                    const movieDetails = await Promise.all(
                        movies.map(async (movie) => {
                            const movieDetailsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}`);
                            if (movieDetailsResponse.ok) {
                                const details = await movieDetailsResponse.json();
                                const castResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${apiKey}`);
                                const castData = await castResponse.json();
                                const trailerResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}`);
                                const trailerData = await trailerResponse.json();
                                const firstTrailer = trailerData.results.find((video) => video.type === 'Trailer');

                                return {
                                    ...details,
                                    cast: castData.cast.map((actor) => ({
                                        ...actor,
                                        profile_path: actor.profile_path || '/default-profile-image.jpg',
                                    })),
                                    trailerKey: firstTrailer ? firstTrailer.key : '',
                                };
                            } else {
                                console.error(`Error fetching movie details: ${movieDetailsResponse.status}`);
                                return null;
                            }
                        })
                    );

                    setMovieData((prevData) => [...prevData, ...movieDetails]);
                    setHasMoreMovies(data.page < data.total_pages);
                } else {
                    console.error(`Error fetching popular movies: ${response.status}`);
                }
            } catch (error) {
                console.error(`An error occurred: ${error}`);
            }
        };

        fetchPopularMovies();
    }, [currentPage]);

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
        navigate(`/movie/${movie.id}`);
    };

    const loadMoreMovies = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    return (
        <div>
        <div className='container'>
            {movieData.length > 0 ? (
                movieData.map((movie) => (
                    <div className='movie-id' key={movie.id} onClick={() => handleMovieClick(movie)}>
                        <Link to={`/movie/${movie.id}`}>
                            <img
                                className='movie-poster'
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                        </Link>

                        {selectedMovie === movie && (
                            <div className='trailer-container'>
                                <iframe
                                    className='trailer-video'
                                    width='100%'
                                    height='100%'
                                    src={`https://www.youtube.com/embed/${movie.trailerKey}`}
                                    title={`${movie.title} Trailer`}
                                    frameBorder='0'
                                    allowFullScreen
                                ></iframe>
                                <div className='movie-info'>
                                    <p>{movie.overview}</p>
                                    {movie.cast && movie.cast.length > 0 && (
                                        <div>
                                            <h3>Cast:</h3>
                                            <ul>
                                                {movie.cast.map((actor) => (
                                                    <li key={actor.id}>{actor.name}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}

       
        </div>

        {hasMoreMovies && (
                <button className='load-more-button' onClick={loadMoreMovies}>
                    Load More
                </button>
            )}


        </div>
    );
};

export default MovieInfo;
