import React from 'react';
import './homepage.css';

import babyImg from '../pics/baby.jpg';
import teenImg from '../pics/teen.jpg';
import adultImg from '../pics/adult.jpg';
import homeVid from '../pics/vid_for_land.mp4';
import derma from '../pics/derma.png';
import natural from '../pics/natural.png';
import uvray from '../pics/uvray.png';
// import maria from '../pics/maria.jpg';
// import anne from '../pics/anne.jpg';
// import mark from '../pics/mark.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Homepage() {
  return (

    
    <div className="landing-page">

    <div className="video-section">
        <div className="video-container">
            <video src={homeVid} type="video/mp4" className="product-video" muted autoPlay loop />
            <div className="text-overlay">
            <h1 className="brand-title">Blanco Suave Lotion: Every Drop, A Touch of Care</h1>
            <p className="hero-description">
                Discover our age-specific skincare solutions, crafted with 
                natural ingredients to protect and nourish your skin while providing reliable UV protection.
            </p>
            <button className="cta-button" onClick={() => window.location.href = '/Products'}>
                Shop Now</button>
        </div>
        </div>
    </div>

      <div className="hproduct-gallery">
        <div className="hproduct-container" onClick={() => window.location.href = '/Product/baby'}>
          <img src={babyImg} alt="Blanco Suave UV Protection Lotion" className="hproduct-image" />
          <div className="hproduct-text">Explore Baby Line</div>
        </div>

        <div className="hproduct-container" onClick={() => window.location.href = '/Product/teen'}>
          <img src={teenImg} alt="Blanco Suave UV Protection Lotion" className="hproduct-image" />
          <div className="hproduct-text">Explore Teen Line</div>
        </div>

        <div className="hproduct-container" onClick={() => window.location.href = '/Product/adult'}>
          <img src={adultImg} alt="Blanco Suave UV Protection Lotion" className="hproduct-image" />
          <div className="hproduct-text">Explore Adult Line</div>
        </div>
      </div>






    {/* <section className='customer-review'>
      <div className='cm-container'>
        <div className='cm-section-header'>
          <h2 className='cm-title'>Customer Reviews</h2>
        </div>
        <div className='cm-content'>
          <div className='cm-slider js-cm-slider'>
            <div>
              <div className='cm-item'>
                <div className='cm-info'>
                  <img src={maria} alt='maria' />
                  <div className='cm-text-box'>
                    <h3 className='cm-name'>Maria</h3>
                    <span className='cm-place'>Cebu</span>

                  </div>
                </div>
                <p>“Perfect for my baby’s delicate skin!”</p>
                <div className="cm-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>



              <div className='swiper-slide cm-item'>
                <div className='cm-info'>
                  <img src={anne} alt='anne' />
                  <div className='cm-text-box'>
                    <h3 className='cm-name'>Anne</h3>
                    <span className='cm-place'>Minglanilla</span>

                  </div>
                </div>
                <p>“The lavender fragrance is amazing, and it keeps my skin soft!”</p>
                <div className="cm-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>

              <div className='swiper-slide cm-item'>
                <div className='cm-info'>
                  <img src={mark} alt='mark' />
                  <div className='cm-text-box'>
                    <h3 className='cm-name'>Mark</h3>
                    <span className='cm-place'>Talisay</span>

                  </div>
                </div>
                <p>“Finally, a lotion that protects and smells great for the office.”</p>
                <div className="cm-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>

              <div className='swiper-slide cm-item'>
                <div className='cm-info'>
                  <img src={maria} alt='maria' />
                  <div className='cm-text-box'>
                    <h3 className='cm-name'>Maria</h3>
                    <span className='cm-place'>Cebu</span>

                  </div>
                </div>
                <p>“Perfect for my baby’s delicate skin!”</p>
                <div className="cm-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>

          </div>
          <div class="swiper-pagination js-cm-pagination"></div>
        </div>

      </div>

    </section> */}



















    {/* <div className="customer-reviews-section">
          <h2 className="customer-reviews-title">Customer Reviews</h2>

      <div className="review">
          <img src={maria} alt="Maria" className="review-image" />
        <div className="review-content">
          <p className="review-text">“Perfect for my baby’s delicate skin!”</p>
          <p className="review-author">– Maria, Cebu</p>
        </div>
      </div>

      <div className="review">
          <img src={anne} alt="Anne" className="review-image" />
        <div className="review-content">
          <p className="review-text">“The lavender fragrance is amazing, and it keeps my skin soft!”</p>
          <p className="review-author">– Anne, 17</p>
        </div>
      </div>

      <div className="review">
          <img src={mark} alt="Mark" className="review-image" />
        <div className="review-content">
          <p className="review-text">“Finally, a lotion that protects and smells great for the office.”</p>
          <p className="review-author">– Mark, 32</p>
        </div>
      </div>
    </div> */}





    <div className='wswu-container'>
      <div className='wswu-profile'>
        <div className='wswu-content'>
          <div className='wswu-header'>
            <img src={derma} alt="Dermatologist-tested" />
            <div className='wswu-infos'>
              <h3>Dermatologist-tested</h3>
            </div>
          </div>
          <div className='wswu-body'>
            <p>
            Dermatologist-tested and suitable for sensitive skin
            </p>

          </div>
        </div>
      </div>


      <div className='wswu-profile1'>
        <div className='wswu-content'>
          <div className='wswu-header'>
            <img src={natural} alt="Natural Ingredients" />
            <div className='wswu-infos'>
              <h3>Natural Ingredients</h3>
            </div>
          </div>
          <div className='wswu-body'>
            <p>
            Infused with natural, age-appropriate ingredients
            </p>

          </div>
        </div>
      </div>



      <div className='wswu-profile2'>
        <div className='wswu-content'>
          <div className='wswu-header'>
            <img src={uvray} alt="Protects-UV-Rays" />
            <div className='wswu-infos'>
              <h3>UV Rays Protection</h3>
            </div>
          </div>
          <div className='wswu-body'>
            <p>
            Protects against harmful UV rays while hydrating
            </p>

          </div>
        </div>
      </div>


      
    </div>







      <footer className="footer">
        <div className="footer-container">
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Blanco Suave. All rights reserved.</p>
        </div>
      </footer>


    </div>
  );
}

export default Homepage;
