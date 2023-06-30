import React from 'react'

function Cart({ selectedImage }) {
  return (
    <div>
      {selectedImage && (
        <img src={selectedImage.imageUrl} alt={selectedImage.imageUrl} />
      )}
    </div>
  );
}

export default Cart;
