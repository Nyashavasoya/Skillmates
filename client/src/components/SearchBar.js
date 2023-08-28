import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {

    const searchResults = users.filter((user) =>
    ['name', 'surname', 'skills', 'interest'].some((field) =>
      user[field].toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

    console.log('Search query:', searchQuery);

  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
