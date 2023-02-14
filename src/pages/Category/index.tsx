import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './category.scss'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Box, Fab, Icon } from '@mui/material';


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
    const setQuantity = (type, menuItemId) => {
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
            tempCart.push({
                id : menuItemId,
                qty : 1
            })
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

                            <span className="qty">{cartItem?.qty || 0}</span>
                            <div className="controls">
                                <ButtonGroup
                                    disableElevation
                                    variant="contained"
                                    aria-label="Disabled elevation buttons"
                                >
                                    <Button onClick={() => {
                                        setQuantity('-', menuItem.id)
                                    }}>-</Button>
                                    <Button onClick={() => {
                                        setQuantity('+', menuItem.id)
                                    }}>+</Button>
                                </ButtonGroup>
                            </div>
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

const FooterButtons = () => {
    return (
        <div className="footerButtons">
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab color="secondary" aria-label="add">
                    +
                </Fab>
            </Box>
        </div>
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


