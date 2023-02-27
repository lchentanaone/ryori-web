import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Context } from '../../global/context.ts';
import RyoHeader from '../../components/RyoHeader/RyoHeader.tsx';
import menuItems from '../../mockData/menuItems.ts';
import QuantitySetter from '../../components/QuantitySetter/QuantitySetter.tsx';
import './food-details.scss'
import FooterButtons from '../../components/FooterButtons.tsx';

const placeholderURL = "https://via.placeholder.com/"
const data = {
}

export default () => {
    const {cart, setCart} = useContext(Context);
    const cartItem = cart.find(cartItem => cartItem.id === menuItems[0].id)
    // TODO : To be refactored
    const emitQuantitySetter = (type, menuItemId) => {

        const tempCart = [...cart]
        const cartIndex = tempCart.findIndex(cartItem => cartItem.id === menuItemId)
        if(cartIndex >= 0) {
            
            // Edit
            tempCart[cartIndex] = {
                ...tempCart[cartIndex],
                qty : type === '+' ? tempCart[cartIndex].qty + 1 : 
                    tempCart[cartIndex].qty === 0 ? 0 :
                    tempCart[cartIndex].qty - 1
            }

            debugger;
        }
        else {

            // New
            tempCart.push({
                id : menuItemId,
                qty : 1
            })
            debugger;
        }

        setCart(tempCart)
    }
  return (
    <>
      <RyoHeader />
      <div className="block details">
        <img src={menuItems[0].image} alt={menuItems[0].label} />
        <h2>{menuItems[0].label}</h2>
        <span className="calorie-count">{menuItems[0].calorieCount} cal</span>
        <p className="description">
            {menuItems[0].description}
        </p>
        <hr />
        <p className="contents">
            {menuItems[0].contents}
        </p>
        <ul className="tags">
            {menuItems[0].tags && menuItems[0].tags.map(tag => 
                (<li>{tag}</li>)
            )}
        </ul>
        <span className="price">P{menuItems[0].price}</span>
        <QuantitySetter qty={cartItem?.qty || 0} itemId={menuItems[0]?.id} handleEmit={emitQuantitySetter} />
      </div>
      <FooterButtons />
      
    </>
  );
}


