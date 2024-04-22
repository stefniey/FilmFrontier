import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetailsPage.css';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const apiKey = '8c8ebd8ccb239c269dc40231dc7c994f';
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);

                if (response.ok) {
                    const data = await response.json();

                    const castResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`);
                    const castData = await castResponse.json();

                    const trailerResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`);
                    const trailerData = await trailerResponse.json();
                    const firstTrailer = trailerData.results.find((video) => video.type === 'Trailer');

                    setMovieDetails({
                        ...data,
                        cast: castData.cast.map((actor) => ({
                            ...actor,
                            profile_path: actor.profile_path
                                ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdKvyLnu6TykKS3ZyD7OXmcr4pjXuBnyGj2A82qNyD9nlM4I5kp472AbFYRImsq5ePdQU&usqp=CAU',
                                
                                
                        })),
                        trailerKey: firstTrailer ? firstTrailer.key : '',
                    });
                } else {
                    console.error(`Error fetching movie details: ${response.status}`);
                }
            } catch (error) {
                console.error(`An error occurred: ${error}`);
            }
        };

        fetchMovieDetails();
    }, [movieId]);

    return (
        
        <div className='container'>
            {movieDetails ? (
                <div>
                    {/* <h2 className='movie-title'>{movieDetails.title}</h2> */}
                    <div className='details-container'>
                        <img
                            className='movie-poster'
                            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                            alt={movieDetails.title}
                        />
                        <div className='movie-info'>
                        <b><p>{movieDetails.overview}</p></b>
                            <br />
                            <b><p>Release Date: {movieDetails.release_date}</p></b>
                            <b><p>Rating: {movieDetails.vote_average}/10</p></b>
                        </div>
                    </div>

                    {/* Display trailer */}
                    {movieDetails.trailerKey && (
                        <div className='trailer-container'>
                            {/* <h3>Trailer</h3> */}
                            <iframe
                                className='trailer-video'
                                // width='100%'
                                // height='315'
                                src={`https://www.youtube.com/embed/${movieDetails.trailerKey}`}
                                title={`${movieDetails.title} Trailer`}
                                frameBorder='0'
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}

                    {/* Display cast */}
                    {movieDetails.cast && movieDetails.cast.length > 0 && (
                        <div className='cast-container'>
                            <br />
                            {/* <h3>Cast</h3> */}
                            <ul>
                                {movieDetails.cast.map((actor) => (
                                    <li key={actor.id}>
                                        <img
                                            src={actor.profile_path}
                                            alt={actor.name}
                                        />
                                        {actor.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
        
    );
};

export default MovieDetailsPage;
