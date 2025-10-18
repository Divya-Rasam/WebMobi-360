import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Admin from './components/Admin';
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [showAdmin, setShowAdmin] = useState(false);
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

  const handleShowAdmin = () => {
    setShowAdmin(true);
  };

  const handleBackToForms = () => {
    setShowAdmin(false);
    handleReset();
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
              handleBackToForms();
            }}
          >
            Login
          </button>
          <button 
            className={!showLogin ? 'active' : ''} 
            onClick={() => {
              setShowLogin(false);
              handleBackToForms();
            }}
          >
            Signup
         </button>





        </nav>
      </header>
      <main>
        {showAdmin ? (
          <Admin />
        ) : message ? (
          <div className="success-container">
            <div className="success-message">
              <h2>Success!</h2>
              <p>{message}</p>
              <button onClick={handleBackToForms} className="reset-button">
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




          // <button 
          //   onClick={handleShowAdmin}
          // >
          //   Admin
          // </button>                                     add this in between