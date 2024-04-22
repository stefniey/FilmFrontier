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
      // Redirect to the search page with the search term
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <div className="search">
      <div className="input-tag">
        <input
          type="text"
          placeholder="Enter movie title..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className='btn'>
        <button onClick={handleSearchSubmit}>Search</button>
      </div>
    </div>
  );
};

export default Search;
