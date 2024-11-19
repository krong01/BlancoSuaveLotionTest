import React, { useState, useEffect } from 'react';
import './adultpage.css';

import adultloImg from '../pics/adult-lo.jpg'; 

function Adultpage() {
  const [size, setSize] = useState('');
  const [fragrance, setFragrance] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Set price and calculate total when size or quantity changes
  useEffect(() => {
    let basePrice = 0;

    if (size === '200mL') {
      basePrice = 10; // Set price for 100mL (in USD)
    } else if (size === '300mL') {
      basePrice = 15; // Set price for 200mL (in USD)
    }

    setPrice(basePrice);
    setTotalPrice(basePrice * quantity * 58); // 1 USD = 58 PHP (You can adjust this exchange rate)
  }, [size, quantity]);

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleFragranceChange = (event) => {
    setFragrance(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCheckout = () => {
    alert(`Proceeding to checkout with ${quantity} ${size} ${fragrance} for ₱${totalPrice}`);
  };

  return (
    <div className="baby-product-page">
      <div className="baby-product-info">
        <img src={adultloImg} alt="Blanco Suave Adult Line" className="baby-product-image" />
        
        <div className="baby-product-details">
          <h1>Adult Line: Sophisticated Protection</h1>
          <div className="baby-price">
            <h2>Price: ${price} (₱{totalPrice})</h2>
          </div>
          <p>
          Created for active adults, this line combines UV defense with nourishing and
          revitalizing properties.
            </p>
          
          <h3>Key Benefits:</h3>
          <ul>
            <li>Long-lasting hydration and UV protection</li>
            <li>Lightweight formula for all-day wear</li>
            <li>Sophisticated fragrances for a Professional touch</li>
          </ul>


            <div className='baby-option'>
          <h3>Fragrances:</h3>
          <select value={fragrance} onChange={handleFragranceChange}>
            <option value="">Select Fragrance</option>
            <option value="Milk">Mint</option>
            <option value="Honey">Amber</option>
            <option value="Orange Blossom">Green Tea</option>
          </select>

          <h3>Sizes:</h3>
          <select value={size} onChange={handleSizeChange}>
            <option value="">Select Size</option>
            <option value="200mL">200mL - $10</option>
            <option value="300mL">300mL - $15</option>
          </select>
          </div>


            <div className='baby-option2'>
          <h3>Quantity:</h3>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            max="10"
            className="baby-quantity-input"
          />

          <div className="baby-total-price">
            <h3>Total Price: ₱{totalPrice}</h3>
          </div>
          </div>

          <button className="baby-checkout-button" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>





      <footer className="baby-footer">
        <div className="baby-footer-container">
        </div>
        <div className="baby-footer-bottom">
          <p>&copy; {new Date().getFullYear()} Blanco Suave. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Adultpage;
