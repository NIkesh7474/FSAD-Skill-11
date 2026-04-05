// App.jsx -- routing setup
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard     from './Dashboard';
import LocalUserList from './LocalUserList';
import UserList      from './UserList';
import FakePostList  from './FakePostList';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'       element={<Dashboard />}     />
        <Route path='/local'  element={<LocalUserList />} />
        <Route path='/users'  element={<UserList />}      />
        <Route path='/posts'  element={<FakePostList />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
