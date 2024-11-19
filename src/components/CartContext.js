import React, { createContext, useState, useContext, useEffect } from 'react';

// Create Context for the cart
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [notification, setNotification] = useState(''); // State for notifications

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Function to display a message
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000); // Clear message after 3 seconds
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) =>
          item.name === product.name &&
          item.fragrance === product.fragrance &&
          item.size === product.size
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        const existingProduct = updatedCart[existingProductIndex];
        existingProduct.quantity += product.quantity;
        existingProduct.totalPrice += product.totalPrice;
        showNotification('Product quantity updated in the cart!');
        return updatedCart;
      } else {
        showNotification('Product added to the cart!');
        return [...prevCart, product];
      }
    });
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((_, i) => i !== index);
      showNotification('Product removed from the cart!');
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    showNotification('Cart cleared!');
  };

  const getTotalPrice = () => {
    return cart.reduce((acc, product) => acc + product.totalPrice, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalPrice,
        notification,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
