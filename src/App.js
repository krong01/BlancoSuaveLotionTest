import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';
import Babypage from './components/Babypage';
import Teenpage from './components/Teenpage';
import Adultpage from './components/Adultpage';
import Cartpage from './components/Cartpage';
import { CartProvider } from './components/CartContext'; 

function App() {
  return (
    <CartProvider> 
      <Router>
        <Header />
        <Routes>
          <Route path="/BlancoSuaveLotionTest" element={<Homepage />} />
          <Route path="/Products" element={<Productpage />} />
          <Route path="/Product/baby" element={<Babypage />} />
          <Route path="/Product/teen" element={<Teenpage />} />
          <Route path="/Product/adult" element={<Adultpage />} />
          <Route path="/Cart" element={<Cartpage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
