import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const handleSearch = () => {
    const getUser = async(username)=>{
      try {
        const response = await axios.get(`http://localhost:3500/user/${username}`);
        navigate(`/user/${searchQuery}`);
      } catch (error) {
          console.error('Error:', error);
      }
    }
    console.log('Search query:', searchQuery);
    getUser(searchQuery);

  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for people..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
