import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL; // Ensure this environment variable is set in your .env file

// Function to handle user signup
export const signup = async (data: {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  dob: string;
  phone: string;
  gender: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, data);
    return response.data; // Return the response data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Signup failed'); // Handle errors
  }
};

// Function to handle user login
export const login = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, data);
    return response.data; // Return the response data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed'); // Handle errors
  }
};

// Function to get user data by ID
export const getUserData = async (userId: string) => {
  try {
    const response = await axios.get(`${API_URL}/auth/user/${userId}`);
    return response.data; // Return user data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching user data'); // Handle errors
  }
};

// Function to update user data
export const updateUser = async (userId: string, data: {
  first_name: string;
  last_name: string;
  email: string;
  dob: string;
  phone: string;
  gender: string;
}) => {
  try {
    const response = await axios.put(`${API_URL}/auth/user/${userId}`, data);
    return response.data; // Return the response data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Update failed'); // Handle errors
  }
};
