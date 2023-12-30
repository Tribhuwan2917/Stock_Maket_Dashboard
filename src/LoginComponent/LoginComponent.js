// src/LoginComponent/LoginComponent.js
import React, { useState } from 'react';
import './LoginComponent.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'flowbite-react';

// const LoginComponent = () => {
  function LoginComponent(){
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate()

  const handleLoginClick = () => {
    setIsSignInForm(true);
  };

  const handleCreateClick = () => {
    setIsSignInForm(false);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Simulate user registration by storing credentials in localStorage
    localStorage.setItem('user', JSON.stringify({ username, email, password }));

    // Redirect to login page
    setIsSignInForm(true);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Simulate user authentication by checking credentials in localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      console.log("is has been called")
      // setTimeout(()=>{},1000)
      navigate('/stockDeshboard')
      
      // location.reload()
      // <Link src="/stockDeshboard"></Link>
      // <a src="/stockDeshboard">click here</a>

      // alert('Login successful!');
      // You can add logic to redirect the user or perform other actions upon successful login.
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className={`container ${isSignInForm ? 'signinForm' : ''}`}>
      {isSignInForm ? (
        // Your existing login form JSX
        // For example:
        <div className="form signin">
          <h2>Sign In</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="inputBox">
              <input type="text" required="required" value={username} onChange={(e) => setUsername(e.target.value)} />
              <i className="fa-regular fa-user"></i>
              <span>username</span>
            </div>
            <div className="inputBox">
              <input type="password" required="required" value={password} onChange={(e) => setPassword(e.target.value)} />
              <i className="fa-solid fa-lock"></i>
              <span>password</span>
            </div>
            <div className="inputBox">
              <input type="submit" value="Login" />
            </div>
            <p>
              Not Registered ?{' '}
              <button className="create" onClick={handleCreateClick}>
                Create an account
              </button>
            </p>
          </form>
        </div>
      ) : (
        // Your modified registration form JSX
        <div className="form signup">
          <h2>Sign Up</h2>
          <form onSubmit={handleRegisterSubmit}>
            <div className="inputBox">
              <input type="text" required="required" value={username} onChange={(e) => setUsername(e.target.value)} />
              <i className="fa-regular fa-user"></i>
              <span>username</span>
            </div>
            <div className="inputBox">
              <input type="text" required="required" value={email} onChange={(e) => setEmail(e.target.value)} />
              <i className="fa-regular fa-envelope"></i>
              <span>email address</span>
            </div>
            <div className="inputBox">
              <input type="password" required="required" value={password} onChange={(e) => setPassword(e.target.value)} />
              <i className="fa-solid fa-lock"></i>
              <span>create password</span>
            </div>
            <div className="inputBox">
              <input
                type="password"
                required="required"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <i className="fa-solid fa-lock"></i>
              <span>confirm password</span>
            </div>
            <div className="inputBox">
              <input type="submit" value="Create Account" />
            </div>
          </form>
          <p>
            Already a member ?{' '}
            <Button className="login" onClick={handleLoginClick} >
              Log in
            </Button>
          </p>
        </div>
      )}
    </div>
  );
  
      }
export default LoginComponent;
