import React from 'react'
import './ProductCards.css'

const ProductCards = ({card_title}) => {
  return (
    <>
    <div className='product-card-title'>
        <p>{card_title}</p>
      </div>
    <div className='product-card-section'>
      <div className="product-cards">
        <div className="product-card">
          <div className="product-image">
            <img src="https://apollo.olx.in/v1/files/hkhpzaqixk8b1-IN/image;s=780x0;q=60" alt="product" />
            <span className="featured-badge">FEATURED</span>
            <span><button className="wishlist-button">♡</button></span>
          </div>
          <div className="product-info">
            <h4 className="product-price">₹ 9,75,000</h4>
            <p className="product-details">2019 - 74,150 km</p>
            <p className="product-name">Maruti Suzuki Ertiga 2018-2022 1.4 VXI...</p>
            <p className="product-location">MUMBAI NAKA, NASHIK</p>
            <p className="product-posted">NOV 19</p>
          </div>
        </div>
      </div>
      <div className="product-cards">
        <div className="product-card">
          <div className="product-image">
            <img src="https://apollo.olx.in/v1/files/hkhpzaqixk8b1-IN/image;s=780x0;q=60" alt="product" />
            <span className="featured-badge">FEATURED</span>
            <span><button className="wishlist-button">♡</button></span>
          </div>
          <div className="product-info">
            <h4 className="product-price">₹ 9,75,000</h4>
            <p className="product-details">2019 - 74,150 km</p>
            <p className="product-name">Maruti Suzuki Ertiga 2018-2022 1.4 VXI...</p>
            <p className="product-location">MUMBAI NAKA, NASHIK</p>
            <p className="product-posted">NOV 19</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductCards
