import React from 'react';
import './order-summary.scss'
import { Button, ButtonGroup, FormControl, Input, InputAdornment, InputLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import QuantitySetter from '../../components/QuantitySetter/QuantitySetter.tsx';

const placeholderURL = "https://via.placeholder.com/"
const data = {
    orders : [{
        id : '001',
        image : placeholderURL + '150',
        label : "Beef Balbacua",
        price : 89,
        qty : 1
    }, {
        id : '002',
        image : placeholderURL + '150',
        label : "Leche Flan with strawberry topping",
        price : 89,
        qty : 1
    }],
    total : 0
}

const SearchField = () => {
    return (
        <div className="search">
            <FormControl variant="standard">
                
                <Input
                id="input-with-icon-adornment"
                placeholder='What do you like?'
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }
                />
            </FormControl>
        </div>
    )
}

export default () => {
    // TODO : Must be refactored to a separate component's function. This has consecutive DOM below which must be carried along when that is refactored.
    // get from QuantitySetter
    const emitQuantitySetter = (type, menuItemId) => {

        // const tempCart = [...cart]
        // const cartIndex = tempCart.findIndex(cartItem => cartItem.id === menuItemId)
        // if(cartIndex >= 0) {
            
        //     // Edit
        //     tempCart[cartIndex] = {
        //         ...tempCart[cartIndex],
        //         qty : type === '+' ? tempCart[cartIndex].qty + 1 : 
        //             tempCart[cartIndex].qty === 0 ? 0 :
        //             tempCart[cartIndex].qty - 1
        //     }


        // }
        // else {

        //     // New
        //     tempCart.push({
        //         id : menuItemId,
        //         qty : 1
        //     })
        // }

        // updateCart(tempCart)
    }
  return (
    <>
      <div className="header block">
        <SearchField />
      </div>
      <h3>Wow! your meal is amazing</h3>
      <div className="block">
        <ul className="orders">
            {
            data.orders && data.orders.map(order => (
                <li className="order-item hor">
                    <img src={order.image} alt={order.label} />
                    <div className="ver">
                        <div>
                            <h6>{order.label}</h6>
                            <span className="price">₱{order.price}</span>
                            <span className="qty">{order.qty}</span>
                        </div>
                        {/* TODO : Must be refactored into a separate component */}
                        <QuantitySetter qty={order?.qty || 0}  itemId={order?.id} handleEmit={emitQuantitySetter} />
                    </div>
                </li>
            ))
            }
        </ul>
      </div>
      <div className="block">
        <h4>Good deal it's only</h4>
        <h3>₱{data.total}</h3>
      </div>
      <div className="block">
        <Link to="/"><Button variant="outlined">Add More</Button></Link>
        <Link to="/"><Button variant="contained">Submit</Button></Link>
      </div>
    </>
  );
}


