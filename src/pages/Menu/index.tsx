import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss'
import categories from './../../mockData/category.ts';
import { placeholderURL } from '../../mockData/global.ts';

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
            categories && categories.map(category => (
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