import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

function LoginPage({formData}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate=useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    // Check if the entered username and email match any registered user
    const matchingUser = formData && formData.name === username && formData.email === email;


    if (matchingUser) {
      // Login successful
      setIsLoggedIn(true);
      setLoginError(false);
    } else {
      // Login failed
      setLoginError(true);
    }

    setUsername('');
    setEmail('');
  };

  if (isLoggedIn) {
    // Redirect to the home page
    return navigate("/home");
  }

  return (
    <div className="container">
      <h1>Login Form</h1>
      <div className="form-container">
        <form onSubmit={handleLogin}>
          <div>
            <label>Name</label>
            <br />
            <input
              name="name"
              value={username}
              type="text"
              placeholder="Please enter name"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <label>E-mail</label>
            <br />
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Please enter email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <button className="button" type="submit">
            Login
          </button>
        </form>
        {loginError && <p>Invalid username or email. Please try again.</p>}
      </div>
    </div>
  );
}

export default LoginPage;
