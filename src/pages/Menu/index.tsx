import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss'

const placeholderURL = "https://via.placeholder.com/"
const data = {
  categories : [{
    label : "Pasta",
    image : placeholderURL + "150"
  }, {
    label : "Drinks",
    image :placeholderURL + "150"
  }, {
    label : "Short Orders",
    image : placeholderURL + "150"
  }, {
    label : "Chicken",
    image : placeholderURL + "150"
  }, {
    label : "Pasta",
    image : placeholderURL + "150"
  }, {
    label : "Drinks",
    image :placeholderURL + "150"
  }, {
    label : "Short Orders",
    image : placeholderURL + "150"
  }, {
    label : "Chicken",
    image : placeholderURL + "150"
  }]
}

export default () => {
  return (
    <>
      <div className="header block">
        <img src={placeholderURL + '50'} alt="Company Name" />
        <span>Company Name</span>
      </div>
      <h2>Our Specials</h2>
      <div className="features block">
        <img src={placeholderURL + 150} alt="Salad with feta Cheese" />
        <div className="feature-meta">
          <h3>Salad with feta Cheese</h3>
          <span className="price">P12.99</span>
        </div>
      </div>
      <h5>What do you like?</h5>
      <div className="menu block">
        <ul className="menu-list">
          {
            data.categories && data.categories.map(category => (
              <li className="menu-item">
                <Link to="/category">
                  <img src={category.image} alt={category.image} />
                  <h6>{category.label}</h6>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
}