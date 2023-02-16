import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './thankyou.scss';
import { Context } from '../../global/context.ts';

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
      <div className="block">
        <div className="ver center">
            <h3>Thank you for selecting your orders</h3><br />
            <img src={placeholderURL + '200'} />
            <h4>Waiter is approaching the table...</h4>
        </div>
      </div>
      <div className="block ver center space">
        <p>Get <strong>the awesomest</strong> dining experience at your fingertips.</p>
        
        <span><Button variant="contained" onClick={() => { alert('under construction') }}>Take Photos</Button></span>
        <Link to="/"><Button variant="contained" >Add More Order</Button></Link>
        <span><Button variant="contained" onClick={() => { alert('under construction') }}>Sign in our App</Button></span>
      </div>
      
    </>
  );
}


