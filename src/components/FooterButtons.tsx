import React from "react"
import { Box, Fab } from "@mui/material"
import { Link } from 'react-router-dom';
const FooterButtons = () => {
    return (
        <div className="footerButtons">
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Link to="/summary">
                    <Fab color="secondary" aria-label="add">
                        +
                    </Fab>
                </Link>
            </Box>
        </div>
    )
}
export default FooterButtons