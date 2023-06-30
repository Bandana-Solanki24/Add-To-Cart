import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

import axios from 'axios';

import './index.css'


function Registration({ onRegistration }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = {
        id: Date.now(), // Generate a unique ID (you can use a library for more robust ID generation)
        name: username,
        email: email
      };
      console.log(formData);
        
      const response = await axios.post('http://localhost:5000/users', formData);
      if (response.status === 201) {
        // Registration was successful
        setRegistrationSuccess(true);
        
        onRegistration(formData);
      } else {
        // Handle invalid data or display error messages
        console.log('Registration failed:', response.data.error);
      }



      

      //Write the data to a JSON file
      // await axios.post('https://localhost:3003/users.json/users', formData);

      console.log(response);
      setUsername('');
      setEmail('');
      // navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };
  if (registrationSuccess) {
    // Redirect to the login page
    return navigate("/loginPage" );
  }


  // useEffect(() => {
  //   navigate('/login');
  // }, [navigate]);

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <div className="form-container"> 
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <br/>
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
          <br/>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Please enter email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <button className="button" type="submit">Submit</button>
      </form>
      
    </div>
    </div>
  );
}

export default Registration;
