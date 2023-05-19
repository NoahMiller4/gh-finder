
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Search from './components/Search'
import User from './components/User';
import './style/index.css';

function App() {
  return (
      <div className="container">
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/user/:username" element={<User />} />
        </Routes>
      </div>
  );
}

export default App;