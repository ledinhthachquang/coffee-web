import React from 'react'
import './Order.css'
import images from '../../constants/images'
const Order = () => {
  return (
    <div className='app__menu section__padding'>
        <div class="heading ">
        <img src={images.hd} alt="" />
             <h3 className='headtext__cormorant'>Món uống hôm nay</h3>
         </div>

   <div class="box-container">

    <div className='app__card '>
    <div class="box card_in_font">
         <img src={images.m1} alt=""/>
         <h3>love you coffee</h3>
      </div>
      <div class="card__side card_in_back card__side--back-2">
        <div class="card__cta">
            <div class="card__price-box">
                <p class="card__price-only">Only</p>
                <p class="card__price-value">$497</p>
            </div>
            <a href="#popup" class="btn btn--white">Book now!</a>
        </div>
    </div>
    </div>
    
      
    <div className='app__card'>
    <div class="box">
         <img src={images.m2} alt=""/>  
         <h3>Cappuccino</h3>
      </div>
    </div>
    <div className='app__card'>
    <div class="box">
         <img src={images.m3} alt=""/>
         <h3>Mocha coffee</h3>
      </div>
    </div>
    <div className='app__card'>
    <div class="box">
         <img src={images.m4} alt=""/>
         <h3>Frappuccino</h3>
      </div>
    </div>
    <div className='app__card'>
    <div class="box">
         <img src={images.m5} alt=""/>
         <h3>black coffee</h3>
      </div>
    </div>
    <div className='app__card'>
    <div class="box">
         <img src={images.m6} alt=""/>
         <h3>love heart coffee</h3>
      </div>
    </div>
   </div>
    </div>
  )
}

export default Order