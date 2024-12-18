import React, { useEffect, useState } from 'react'
import './ProductCards.css'

const ProductCards = ({card_title}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        
        if (response.ok) {
          setProducts(data.products);
        } else {
          console.error('Error fetching products:', data.message);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
    <div className='product-card-title'>
        <p>{card_title}</p>
      </div>
    <div className='product-card-section'>
    {products.length > 0 ? (
          products.map((product, idx) => (
            <div key={idx} className="product-cards">
              <div className="product-card">
                <div className="product-image">
                  <img src={`http://localhost:5000${product.images[0]}`} alt="product" />
                  <span className="featured-badge">Featured</span>
                  <span><button className="wishlist-button">♡</button></span>
                </div>
                <div className="product-info">
                  <h4 className="product-price">₹ {product.price}</h4>
                  <p className="product-details">{product.year} - {product.km_driven} km</p>
                  <p className="product-name">{product.ad_title}</p>
                  <p className="product-location">{product.brand}</p>
                  <p className="product-posted">{product.createdAt}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      {/* <div className="product-cards">
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
      </div> */}
    </div>
    </>
  )
}

export default ProductCards
