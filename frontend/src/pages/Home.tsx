import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { userId, setUser } = useAuth();

  const handleLogout = () => {
    setUser(null); // Clear user data
  };

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <p>Your user ID is: {userId}</p>
      <Link to="/update">Update your information</Link>
      <Link to="/login" onClick={handleLogout}>Logout</Link>
    </div>
  );
};

export default Home;
