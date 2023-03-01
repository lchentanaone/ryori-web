import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss'
import categories from '../../mockData/category.ts';
import restoData from '../../mockData/resto-data.ts';
import { placeholderURL } from '../../mockData/global.ts';
import RyoHeader from '../../components/RyoHeader/RyoHeader.tsx';

export default () => {
  return (
    <>
      <RyoHeader />
      <div className="features block full with-bg-image" style={{backgroundImage: "url(" + restoData.bg + ")"}}>
        <img src={categories[0].image} alt="Salad with feta Cheese" />
        <div className="feature-meta">
          <h2>Our Specials</h2>
          <h3>Salad with feta Cheese</h3>
          <span className="price">P12.99</span>
        </div>
      </div>
      
      <div className="menu block">
        <h5>What do you like?</h5>
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