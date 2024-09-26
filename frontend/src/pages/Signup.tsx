import React, { useState } from 'react';
import { signup } from '../services/authService';
import { useNavigate, Link } from 'react-router-dom';

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    dob: '',
    phone: '',
    gender: '',
  });
  const [error, setError] = useState<string | null>(null); // State for error messages
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(formData);
      navigate('/login');
    } catch (error) {
      setError(error.message); // Set error message if signup fails
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="first_name" placeholder="First Name" onChange={handleChange} required />
        <input type="text" name="last_name" placeholder="Last Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="date" name="dob" onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <select name="gender" onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Signup;
