import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/pictures/buildLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const correctPasscode = '1234'; // Replace with your actual logic

    if (passcode === correctPasscode) {
      setIsAuthenticated(true);
      navigate('/landing');
    } else {
      setError('Incorrect passcode. Try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-header">
        <img src={logo} alt="Buildlink Logo" className="login-logo" />
        <h1 className="login-brand">BUILDLINK</h1>
        <div className="login-switch">
          <span className="login-client">Client</span>
          <span className="login-provider">Provider</span>
        </div>
      </div>

      <form className="login-card" onSubmit={handleLogin}>
        <div className="login-title-row">
          <h2 className="login-title">Log In</h2>
          <p className="login-register">Create New Account</p>
        </div>

        <label className="login-label">Username</label>
        <input
          className="login-input"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="login-label">Passcode</label>
        <input
          className="login-input"
          type="password"
          placeholder="Enter your passcode"
          value={passcode}
          onChange={(e) => setPasscode(e.target.value)}
        />

        <div className="login-remember-row">
          <input type="checkbox" className="login-checkbox" />
          <span>Remember Me</span>
        </div>

        <button type="submit" className="login-button">Log In</button>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div className="login-divider">
          <div className="line"></div>
          <span>Or Sign Up using</span>
          <div className="line"></div>
        </div>

        <div className="login-socials">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </div>

        <p className="login-bottom-text">
          Don’t have an account? <span className="login-register-link">Register.</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
