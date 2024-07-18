import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';

const SearchResults = () => {
    const { searchTerm } = useParams();
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const apiKey = "8c8ebd8ccb239c269dc40231dc7c994f";
                const response = await fetch(
                    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
                );

                if (response.ok) {
                    const data = await response.json();
                    const movies = data.results;

                    const movieDetails = await Promise.all(
                        movies.map(async (movie) => {
                            const movieDetailsResponse = await fetch(
                                `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}`
                            );
                            if (movieDetailsResponse.ok) {
                                const details = await movieDetailsResponse.json();
                                const castResponse = await fetch(
                                    `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${apiKey}`
                                );
                                const castData = await castResponse.json();
                                const trailerResponse = await fetch(
                                    `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}`
                                );
                                const trailerData = await trailerResponse.json();
                                const firstTrailer = trailerData.results.find(
                                    (video) => video.type === "Trailer"
                                );

                                return {
                                    ...details,
                                    cast: castData.cast.map((actor) => ({
                                        ...actor,
                                        profile_path:
                                            actor.profile_path || "/default-profile-image.jpg",
                                    })),
                                    trailerKey: firstTrailer ? firstTrailer.key : "",
                                };
                            } else {
                                console.error(
                                    `Error fetching movie details: ${movieDetailsResponse.status}`
                                );
                                return null;
                            }
                        })
                    );

                    setSearchResults(movieDetails);
                } else {
                    console.error(`Error fetching search results: ${response.status}`);
                }
            } catch (error) {
                console.error(`An error occurred: ${error}`);
            }
        };

        fetchSearchResults();
    }, [searchTerm]);
    <Navbar />

    return (

        <div className="container">
            {searchResults.length > 0 ? (
                searchResults.map((movie) => (
                    <div className="movie-id" key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
                            <img
                                className="movie-poster"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            {/* <h2 className='movie-title'>{movie.title}</h2> */}
                        </Link>
                        {/* Add other movie details and rendering logic here */}
                    </div>
                ))
            ) : (
                <p>Loading "{searchTerm}"</p>
            )}
        
        </div>
    );
};

export default SearchResults;
