import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then(data => { setUsers(data); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, []);

  if (loading) return <p>Fetching users from API...</p>;
  if (error)   return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div className='container'>
      <h2>Users (JSONPlaceholder API)</h2>
      <p className='source'>Source: jsonplaceholder.typicode.com/users — fetch()</p>
      <table>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Email</th><th>Phone</th></tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
