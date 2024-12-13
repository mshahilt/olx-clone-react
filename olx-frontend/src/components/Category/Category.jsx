import React from 'react'
import './Category.css'

const Category = () => {
  return (
      <div className="category-navbar">
      <div className="category-dropdown">
        <span>ALL CATEGORIES</span>
        <button className="dropdown-button">▼</button>
      </div>
      <div className="categories">
        <span>Cars</span>
        <span>Motorcycles</span>
        <span>Mobile Phones</span>
        <span>For Sale: Houses & Apartments</span>
        <span>Scooters</span>
        <span>Commercial & Other Vehicles</span>
        <span>For Rent: Houses & Apartments</span>
      </div>
    </div>
  )
}

export default Category
