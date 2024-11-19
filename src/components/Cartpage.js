import React from 'react';
import { useCart } from './CartContext';
import './cartpage.css';

function Cartpage() {
  const { cart, getTotalPrice, clearCart, removeFromCart, notification } = useCart();

  return (
    <div className="cart-page">
      <header>
        <h1>Your Cart</h1>
      </header>

      {/* Notification Message */}
      {notification && <div className="notification">{notification}</div>}

      {cart.length === 0 ? (
        <p>Your cart is empty. Please add some items.</p>
      ) : (
        <div className="cart-items">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Fragrance</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product, index) => (
                <tr key={index}>
                  <td>
                    <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
                  </td>
                  <td>{product.fragrance}</td>
                  <td>{product.size}</td>
                  <td>{product.quantity}</td>
                  <td>₱{product.totalPrice / product.quantity}</td>
                  <td>₱{product.totalPrice}</td>
                  <td>
                    <button onClick={() => removeFromCart(index)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="cart-total">
        <h3>Total Price: ₱{getTotalPrice()}</h3>
      </div>

      <div className="cart-actions">
        <button onClick={clearCart}>Clear Cart</button>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cartpage;
