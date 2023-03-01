import React, { useContext } from 'react';
import './order-summary.scss'
import { Button, ButtonGroup, FormControl, Input, InputAdornment, InputLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import QuantitySetter from '../../components/QuantitySetter/QuantitySetter.tsx';
import { Context } from '../../global/context.ts';
import RyoHeader from '../../components/RyoHeader/RyoHeader.tsx';

const placeholderURL = "https://via.placeholder.com/"
const data = {
    total : 0
}

export default () => {
    const {cart, setCart} = useContext(Context);
    
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
      <RyoHeader />
      <div className="block">
        <h3>Wow! your meal is amazing</h3>
      </div>
      <div className="block full">
        <ul className="orders full">
            {
            cart && cart.map(order => (
                <li className="order-item hor full">
                  <div className="block">
                    <img src={order.image} alt={order.label} />
                    <div className="ver">
                        <div className="hor meta-data">
                            <h3>{order.label}</h3>
                            <h5 className="price">₱{order.price}</h5>
                        </div>
                        {/* TODO : Must be refactored into a separate component */}
                        <QuantitySetter qty={order?.qty || 0}  itemId={order?.id} handleEmit={emitQuantitySetter} />
                    </div>
                  </div>
                </li>
            ))
            }
        </ul>
      </div>
      <div className="block total hor">
        <h4>Good deal it's only</h4>
        <h3>₱{data.total}</h3>
      </div>
      <div className="block">
        <Button href="/" variant="outlined">Add More</Button>
        <Button href="/thank-you" variant="contained">Submit</Button>
      </div>
    </>
  );
}


