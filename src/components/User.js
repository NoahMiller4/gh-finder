
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const User = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const token = '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';

    const getUser = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const getRepos = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRepos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getUser();
    getRepos();
  }, [username]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='info'>
        <img src={user.avatar_url} alt={user.name} />
        <h1>{user.name}</h1>
        <p><span style={{ color: 'green' }}>{user.public_repos}</span>Repositories</p>
        <p><span style={{ color: 'green' }}>{user.followers}</span>Followers</p>
        <p><span style={{ color: 'green' }}>{user.following}</span>Following</p>
      </div>
      <div className='repos'>
        <h2>My Repositories</h2>
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
        </div>
    </div>
  );
};

export default User;



/*import axios from 'axios'

function User() {
  return (
    <div></div>
  )
}

export default User*/