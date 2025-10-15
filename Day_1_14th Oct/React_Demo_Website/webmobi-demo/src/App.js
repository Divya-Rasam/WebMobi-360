import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h1>WebMobi 360 Demo</h1>
        <nav>
          <button 
            className={showLogin ? 'active' : ''} 
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>
          <button 
            className={!showLogin ? 'active' : ''} 
            onClick={() => setShowLogin(false)}
          >
            Signup
          </button>
        </nav>
      </header>
      <main>
        {showLogin ? <Login /> : <Signup />}
      </main>
    </div>
  );
}

export default App;