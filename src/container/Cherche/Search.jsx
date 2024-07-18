import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = () => {
        if (searchTerm.trim() !== '') {
            // search page is redirected with this code
            navigate(`/search/${searchTerm}`);
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Enter movie title..."
                value={searchTerm}
                onChange={handleSearchChange}
                className='search-input'

            />
            <button className='search-button' onClick={handleSearchSubmit}>Search</button>


        </div>


    );
};

export default Search;





