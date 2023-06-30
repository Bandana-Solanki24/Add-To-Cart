import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';
import Navbar from '../Navbar';




const Home = ({addCartValueToCart,cartCount}) => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage]=useState([])

  const getImages = async () => {
    const result = await axios.get("http://localhost:5000/images");
    setImages(result.data);
    console.log(result);
  }


  useEffect(() => {
    getImages();
    }, []);

  
  const addToCart = (image) => {
    addCartValueToCart()
    setSelectedImage((prevImage)=>[...prevImage, image]);
    
  };

  return (
      <div>
      <Navbar cartCount={cartCount}/>
      <div className="pizza-container">
        <ul>
          {images.map((image) => {
            return (
              <li key={image.id}>
                <div className="image-container">
                  <img className="image" src={image.imageUrl} alt={image.imageUrl} />

                  <button onClick={()=>addToCart(image)} className="add-cart-button">
                    Add to cart
                    
                    
                  </button>
                </div>
               
              </li>
            );
          })}
        </ul>
      </div>
      </div>
  );
};

export default Home;
