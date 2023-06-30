import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import React,{useState} from 'react';
import Home from './component/Home';
import Cart from 
'./component/Cart'
import Navbar from './component/Navbar'
import LoginPage from './component/LoginPage';
import Registration from './component/Registration';

import './App.css';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [formData, setFormData] = useState(null);
  const [selectedImage, setSelectedImage]=useState(null);


  const handleRegistration = (data) => {
    setFormData(data);
    
  };
  

  const handleAddToCart = (image) => {
    setCartCount(cartCount + 1);
    setSelectedImage(image)
  };
  return (
    // <Home/>
    <Router>
      {/* <Navbar cartCount={cartCount} /> */}
      <Routes>
      <Route  path="/" element={<Registration onRegistration={handleRegistration}/>} />
      <Route path="/loginPage"  element={<LoginPage formData={formData}/>} />

        <Route path="/home" 
        element={<Home addCartValueToCart={handleAddToCart} cartCount={cartCount}/>} />
        <Route path="/cart" element={<Cart selectedImage={selectedImage} />} />
        
      </Routes>
    </Router>

    
  );
}

export default App;
