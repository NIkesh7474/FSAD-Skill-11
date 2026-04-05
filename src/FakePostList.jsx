import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FakePostList = () => {
  const [posts, setPosts]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter]   = useState('all');

  const fetchPosts = () => {
    setLoading(true);
    axios.get('https://dummyjson.com/posts')
      .then(res => { setPosts(res.data.posts); setLoading(false); })
      .catch(err => { console.error(err); setLoading(false); });
  };

  useEffect(() => { fetchPosts(); }, []);

  // Dropdown filter by userId
  const userIds  = [...new Set(posts.map(p => p.userId))];
  const filtered = filter === 'all'
    ? posts
    : posts.filter(p => String(p.userId) === filter);

  if (loading) return <p>Loading posts...</p>;

  return (
    <div className='container'>
      <h2>Fake API Posts (DummyJSON)</h2>
      <p className='source'>Source: dummyjson.com/posts — axios</p>
      <div className='controls'>
        <label>Filter by User: </label>
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value='all'>All Users</option>
          {userIds.map(id => (
            <option key={id} value={id}>User {id}</option>
          ))}
        </select>
        <button className='btn-refresh' onClick={fetchPosts}>
          Refresh
        </button>
      </div>
      <ul>
        {filtered.map(p => (
          <li key={p.id}>
            <strong>{p.title}</strong>
            <p>{p.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FakePostList;
