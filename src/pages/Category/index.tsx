import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './category.scss'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import FooterButtons from '../../components/FooterButtons.tsx';
import QuantitySetter from '../../components/QuantitySetter/QuantitySetter.tsx';

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
  }],
  menuItems : [{
    id: '001',
    label : "Falafel with salad",
    calorieCount: 180,
    price : 189.99,
    discount : 0.15,
    image : placeholderURL + "150"
  }, {
    id: '002',
    label : "Falafel with salad",
    calorieCount: 180,
    price : 189.99,
    discount : 0.15,
    image : placeholderURL + "150"
  }, {
    id: '003',
    label : "Falafel with salad",
    calorieCount: 180,
    price : 189.99,
    discount : 0.15,
    image : placeholderURL + "150"
  }, {
    id: '004',
    label : "Falafel with salad",
    calorieCount: 180,
    price : 189.99,
    discount : 0.15,
    image : placeholderURL + "150"
  }]
}

const MenuItems = ({menuItems, cart, updateCart}) => {
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

        updateCart(tempCart)
    }
    return (
        <>
        <div className="menu block">
            <ul className="menu-items">
            {
                menuItems && menuItems.map(menuItem => {
                    const cartItem = tempCart.find(cartItem => cartItem.id === menuItem.id)
                    console.log({cartItem})
                    return (
                        <li className="menu-item">
                        {/* <Link to="/add-to-cart"> */}
                            <img src={menuItem.image} alt={menuItem.image} />
                            <h6>{menuItem.label}</h6>
                            <span className="calorie-count">{menuItem.calorieCount} cal</span>
                            <span className="discount">{menuItem.discount}% off</span>
                            <span className="price">₱{menuItem.price}</span>
                            <Link to="/food-details">See more &#8811;</Link>

                            
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
    const [cart, setCart] = useState([
        {
          "id": "001",
          "qty": 1
        }
      ])
    const updateCart = (updatedCart) => {

        setCart(updatedCart)

    }
  return (
    <>
      <div className="header block">
        <img src={placeholderURL + '50'} alt="Company Name" />
        <span>Company Name</span>
      </div>
      <h2>Choose Your Order</h2>
      <div className="block">
        <ul className="categories">
            {
            data.categories && data.categories.map(category => (
              <li className="category">
                <Link to="/category">
                    <span>{category.label}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      <MenuItems menuItems={data.menuItems} cart={cart} updateCart={updateCart}/>
      <FooterButtons />
    </>
  );
}


