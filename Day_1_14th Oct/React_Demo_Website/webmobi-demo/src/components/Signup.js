import React, { useState } from 'react';
import axios from 'axios';

const Signup = ({ onSignupSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await axios.post('http://localhost:8080/api/auth/signup', {
        name,
        email,
        password
      });
      
      if (response.data.success) {
        onSignupSuccess(response.data.data);
      } else {
        setError(response.data.message || 'Signup failed');
      }
    } catch (err) {
      setError('An error occurred during signup');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Create Account</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input 
            id="name"
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            placeholder="John Doe"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            id="email"
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            placeholder="your@email.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            id="password"
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            placeholder="••••••••"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input 
            id="confirmPassword"
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
            placeholder="••••••••"
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Signup;