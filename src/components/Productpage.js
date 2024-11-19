import React from 'react';
import './productpage.css';

import babyloImg from '../pics/baby-lo.jpg';
import teenloImg from '../pics/teen-lo.jpg';
import adultloImg from '../pics/adult-lo.jpg';

function Productpage() {
  return (
    <div className="products-page">
      <header className="products-header">
        <h1>Blanco Suave Product Lines</h1>
        <p>Discover skincare solutions tailored to every age group.</p>
      </header>

      <div className="product-gallery">
        {/* First Product */}
        <div className="product-row">
          <img src={babyloImg} alt="Blanco Suave Baby Line" className="product-image" />
          <div className="product-description">
            <h2>Baby Line: Soft and Gentle</h2>
            <p>
            Specially designed for delicate baby skin, this line offers ultra-mild formulations
              enriched with natural ingredients to protect and moisturize.
              </p>
            <button className="btn-primary" onClick={() => window.location.href = '/Product/baby'}>Shop now!</button>
          </div>
        </div>

        {/* Second Product */}
        <div className="product-row reverse">
        <img src={teenloImg} alt="Blanco Suave Teen Line" className="product-image" />
          <div className="product-description">
            <h2>Teen Line: Fresh and Vibrant
            </h2>
            <p>
            Perfect for teens, this line is formulated to balance hydration and combat skin stress
            while offering a youthful fragrance.
            </p>
            <button className="btn-primary" onClick={() => window.location.href = '/Product/teen'}>Shop now!</button>
          </div>

        </div>

        {/* Third Product */}
        <div className="product-row">
          <img src={adultloImg} alt="Blanco Suave Adult Line" className="product-image" />
          <div className="product-description">
            <h2>Adult Line: Sophisticated Protection</h2>
            <p>
            Created for active adults, this line combines UV defense with nourishing and
            revitalizing properties.
            </p>
            <button className="btn-primary" onClick={() => window.location.href = '/Product/adult'}>Shop now!</button>
          </div>
        </div>
      </div>

      <footer className="footer">
        {/* <div className="footer-container">
          <p>Follow us on social media for the latest updates!</p>
          <div className="social-icons">
            <a href="#facebook" className="icon">🌐</a>
            <a href="#instagram" className="icon">📷</a>
            <a href="#twitter" className="icon">🐦</a>
          </div>
        </div> */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Blanco Suave. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Productpage;
