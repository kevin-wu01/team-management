import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import UserList from './pages/UserList';
import EditUser from './pages/EditUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/edit" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
