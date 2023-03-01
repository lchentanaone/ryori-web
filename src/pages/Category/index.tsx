import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import './category.scss'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import FooterButtons from '../../components/FooterButtons.tsx';
import QuantitySetter from '../../components/QuantitySetter/QuantitySetter.tsx';
import categories from './../../mockData/category.ts';
import menuItems from '../../mockData/menuItems.ts';
import { placeholderURL } from '../../mockData/global.ts';
import { Context } from '../../global/context.ts';
import RyoHeader from '../../components/RyoHeader/RyoHeader.tsx';

const MenuItems = ({menuItems}) => {
    const {cart, setCart} = useContext(Context);
    const tempCart = [...cart]
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
        }
        else {

            // New

            // Get data of menuItemId 
            const menuItemData = menuItems.find(item => item.id === menuItemId)
            tempCart.push({
                id : menuItemId,
                qty : 1,
                image: menuItemData.image,
                label: menuItemData.label,
                price: menuItemData.price
            })
        }

        setCart(tempCart)
    }
    
    return (
        <>
        <div className="menu block">
            <ul className="menu-items">
            {
                menuItems && menuItems.map(menuItem => {
                    const cartItem = cart.find(cartItem => cartItem.id === menuItem.id)
                    console.log({cartItem})
                    return (
                        <li className="menu-item">
                        {/* <Link to="/add-to-cart"> */}
                            <img src={menuItem.image} alt={menuItem.image} />
                            <h6>{menuItem.label}</h6>
                            <span className="calorie-count">{menuItem.calorieCount} cal</span>
                            <span className="discount">{menuItem.discount}% 
                              <sub>off</sub>
                            </span>
                            <span className="price">₱{menuItem.price}</span>
                            <Link to="/food-details" className="see-more">&#9432;</Link>

                            
                            {/* TODO : Must be refactored into a separate component */}
                            
                            <QuantitySetter qty={cartItem?.qty || 0} itemId={menuItem?.id} handleEmit={emitQuantitySetter} />
                        {/* </Link> */}
                        </li>
                    )
                })
            }
            </ul>
        </div>
        </>
    )
}

export default () => {
  return (
    <>
      <RyoHeader />
      <div className="block categories-container">
        <h2>Choose Your Order</h2>
        <ul className="categories">
            {
            categories && categories.map((category) => (
              <li className="category">
                <Link to="/category">
                    <span>{category.label}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      <MenuItems menuItems={menuItems}/>
      <FooterButtons />
    </>
  );
}


