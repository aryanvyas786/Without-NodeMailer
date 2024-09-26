import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getUserData, updateUser } from '../services/authService';

const Update: React.FC = () => {
  const { userId } = useAuth();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    dob: '',
    phone: '',
    gender: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserData(userId);
      setFormData(userData);
    };

    fetchData();
  }, [userId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateUser(userId, formData);
  };

  return (
    <div>
      <h1>Update User Information</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
