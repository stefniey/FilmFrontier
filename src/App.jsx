import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SignUp, Login,SearchResults } from './components';
import { MovieDetailsPage, MovieInfo } from './container';

import Home from './pages/Home';

const App = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="SignUp" element={<SignUp />} />
                <Route path="Login" element={<Login />} />
                <Route path="movie" element={<MovieInfo />} />
                <Route path="movie/:movieId" element={<MovieDetailsPage />} />
                <Route path="/search/:searchTerm" element={<SearchResults />} />

            </Routes>
        </>
    );
};

export default App;
