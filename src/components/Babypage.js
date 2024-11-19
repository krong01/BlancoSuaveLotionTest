import React, { useState } from 'react';
import { useCart } from './CartContext';
import './babypage.css';

import babyloImg from '../pics/baby-lo.jpg';

function Babypage() {
  const { addToCart } = useCart(); // Use the context to add items to the cart

  // State for the product details
  const [fragrance, setFragrance] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  // State for notifications
  const [notification, setNotification] = useState('');

  // Handle fragrance change
  const handleFragranceChange = (e) => setFragrance(e.target.value);

  // Handle size change and update price
  const handleSizeChange = (e) => {
    setSize(e.target.value);
    setTotalPrice(calculateTotalPrice(e.target.value, quantity));
  };

  // Handle quantity change and update price
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
    setTotalPrice(calculateTotalPrice(size, e.target.value));
  };

  // Calculate total price based on size and quantity
  const calculateTotalPrice = (size, quantity) => {
    let price = 0;
    if (size === '100mL') {
      price = 500; // Price for 100mL
    } else if (size === '200mL') {
      price = 750; // Price for 200mL
    }
    return price * quantity;
  };

  // Handle add to cart
  const handleAddToCart = () => {
    if (!size || !fragrance || quantity < 1) {
      alert('Please select all options!');
      return;
    }

    // Create a product object and add to cart
    const product = {
      name: 'Blanco Suave Baby Line',
      image: babyloImg,
      fragrance,
      size,
      quantity,
      totalPrice,
    };
    addToCart(product); // This will add the product to the cart in CartContext

    // Set a success notification
    setNotification('Product added to cart successfully!');
    setTimeout(() => setNotification(''), 3000); // Hide notification after 3 seconds
  };

  return (
    <div className="product-page">
      <header>
        <h1>Blanco Suave Baby Line</h1>
      </header>

      {/* Notification message */}
      {notification && <div className="notification">{notification}</div>}

      <div className="product-details">
        <img src={babyloImg} alt="Blanco Suave Baby Line" className="product-image" />
        <div className="product-info">
          <h2>Price: ₱{totalPrice}</h2>
          <h3>Fragrance:</h3>
          <select value={fragrance} onChange={handleFragranceChange}>
            <option value="">Select Fragrance</option>
            <option value="Milk">Milk</option>
            <option value="Honey">Honey</option>
            <option value="Orange Blossom">Orange Blossom</option>
            <option value="Baby Powder">Baby Powder</option>
          </select>

          <h3>Size:</h3>
          <select value={size} onChange={handleSizeChange}>
            <option value="">Select Size</option>
            <option value="100mL">100mL - ₱500</option>
            <option value="200mL">200mL - ₱750</option>
          </select>

          <h3>Quantity:</h3>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            max="10"
          />

          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Babypage;
