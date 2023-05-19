
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [username, setUsername] = useState('');
  // Use navigate to be able to redirect to a different page with a button
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    // Perform actions with the entered username
    e.preventDefault();
    if (username.trim() !== '') {
      navigate(`/user/${username}`);
    }
  };

  return (
    <div className='search'>
      <h1>GitHub Finder</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Profile"
          name='input'
          value={username}
          onChange={handleInputChange}
        />
        <input type="submit" value="Search"/>
      </form>
    </div>
  );
};

export default Search;