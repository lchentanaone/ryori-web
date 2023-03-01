import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './thankyou.scss';
import { Context } from '../../global/context.ts';
import restoData from '../../mockData/resto-data.ts';

const placeholderURL = "https://via.placeholder.com/"
const data = {
}

export default () => {
    const contextData = useContext(Context);
    console.log({contextData})
  return (
    <>
      <div className="header block">
        {/* Humbergur here??? */}
      </div>
      <div className="block full with-bg-image" style={{backgroundImage: "url(" + restoData.bg + ")"}}>
        <div className="ver center">
            <h3>Thank you for selecting your orders</h3><br />
            <img src={restoData.waiter} />
            <h4>Waiter is approaching the table...</h4>
        </div>
      </div>
      <div className="block ver center space full bottom">
        <p>Get <strong>the awesomest</strong> dining experience at your fingertips.</p>
        <Button variant="contained" href="/">Add More Order</Button>
      </div>
      
    </>
  );
}


