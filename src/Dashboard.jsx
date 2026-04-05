import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div className='dashboard'>
    <h1>React API Integration Dashboard</h1>
    <p className='subtitle'>Choose a data source to explore</p>
    <div className='nav-buttons'>
      <Link to='/local'>
        <button>Local Users</button>
      </Link>
      <Link to='/users'>
        <button>Users API</button>
      </Link>
      <Link to='/posts'>
        <button>Fake API Posts</button>
      </Link>
    </div>
  </div>
);

export default Dashboard;
