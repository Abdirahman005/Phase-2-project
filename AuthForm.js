import React, { useState } from 'react';
import { registerUser, loginUser } from '../services/api';

const AuthForm = ({ onAuthSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await registerUser(formData);
        alert('User registered successfully!');
      } else {
        const user = await loginUser(formData);
        if (user.data.length) {
          onAuthSuccess(user.data[0]);
        } else {
          alert('Invalid credentials');
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      <button type="button" onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Switch to Sign In' : 'Switch to Sign Up'}
      </button>
    </form>
  );
};

export default AuthForm;