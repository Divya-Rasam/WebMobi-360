import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setMessage(`Welcome, ${userData.name}! You are now logged in.`);
  };

  const handleSignupSuccess = (userData) => {
    setUser(userData);
    setMessage(`Account created successfully! Welcome, ${userData.name}.`);
  };

  const handleReset = () => {
    setUser(null);
    setMessage('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>WebMobi 360 Demo</h1>
        <nav>
          <button 
            className={showLogin ? 'active' : ''} 
            onClick={() => {
              setShowLogin(true);
              handleReset();
            }}
          >
            Login
          </button>
          <button 
            className={!showLogin ? 'active' : ''} 
            onClick={() => {
              setShowLogin(false);
              handleReset();
            }}
          >
            Signup
          </button>
        </nav>
      </header>
      <main>
        {message ? (
          <div className="success-container">
            <div className="success-message">
              <h2>Success!</h2>
              <p>{message}</p>
              <button onClick={handleReset} className="reset-button">
                Back to Forms
              </button>
            </div>
          </div>
        ) : (
          <>
            {showLogin ? 
              <Login onLoginSuccess={handleLoginSuccess} /> : 
              <Signup onSignupSuccess={handleSignupSuccess} />
            }
          </>
        )}
      </main>
    </div>
  );
}

export default App;