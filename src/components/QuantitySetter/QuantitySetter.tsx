import React, { useState } from "react"
import { Box, Button, ButtonGroup, Fab } from "@mui/material"
import { Link } from 'react-router-dom';
import './quantity-setter.scss';

const QuantitySetter = ({qty, itemId, handleEmit}) => {
    
    return (
        <div className="quantity-setter block">
            <span className="qty">{qty}</span>
            <ButtonGroup
                className="button-group"
                disableElevation
                variant="contained"
                aria-label="Quantity Control"
            >
                <Button onClick={() => {
                    handleEmit('-', itemId)
                }}>-</Button>
                <Button onClick={() => {
                    handleEmit('+', itemId)
                }}>+</Button>
            </ButtonGroup>
        </div>
    )
}
export default QuantitySetter