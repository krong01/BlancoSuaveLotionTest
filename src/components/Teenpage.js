import React, { useState, useEffect } from 'react';
import './teenpage.css';

import teenloImg from '../pics/teen-lo.jpg'; 

function Teenpage() {
  const [size, setSize] = useState('');
  const [fragrance, setFragrance] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Set price and calculate total when size or quantity changes
  useEffect(() => {
    let basePrice = 0;

    if (size === '150mL') {
      basePrice = 10; // Set price for 100mL (in USD)
    } else if (size === '250mL') {
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
    <div className="teen-product-page">
      <div className="teen-product-info">
        <img src={teenloImg} alt="Blanco Suave Baby Line" className="teen-product-image" />
        
        <div className="teen-product-details">
          <h1>Teen Line: Fresh and Vibrant</h1>
          <div className="teen-price">
            <h2>Price: ${price} (₱{totalPrice})</h2>
          </div>
          <p>
          Perfect for teens, this line is formulated to balance hydration and combat skin stress
            while offering a youthful fragrance.
          </p>
          
          <h3>Key Benefits:</h3>
          <ul>
            <li>Non-greasy and fast-absorbing</li>
            <li>Light UV protection ideal for daily use</li>
            <li>Fragrance inspired by youthful energy</li>
          </ul>


            <div className='teen-option'>
          <h3>Fragrances:</h3>
          <select value={fragrance} onChange={handleFragranceChange}>
            <option value="">Select Fragrance</option>
            <option value="Milk">Vanilla</option>
            <option value="Honey">Lavender</option>
            <option value="Orange Blossom">Rose</option>
          </select>

          <h3>Sizes:</h3>
          <select value={size} onChange={handleSizeChange}>
            <option value="">Select Size</option>
            <option value="150mL">150mL - $10</option>
            <option value="250mL">250mL - $15</option>
          </select>
          </div>


            <div className='teen-option2'>
          <h3>Quantity:</h3>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            max="99"
            className="teen-quantity-input"
          />

          <div className="teen-total-price">
            <h3>Total Price: ₱{totalPrice}</h3>
          </div>
          </div>

          <button className="teen-checkout-button" onClick={handleCheckout}>
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

export default Teenpage;
