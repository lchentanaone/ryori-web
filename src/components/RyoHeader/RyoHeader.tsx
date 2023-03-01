import React, {useState, useEffect} from "react"
import restoData from "../../mockData/resto-data.ts";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import './ryo-header.scss'
import { FormControl, Input, InputAdornment } from "@mui/material";

const RyoHeader = () => {
    const [type, setType] = useState('primary') //primary|secondary
    const navigate = useNavigate();
    const backHistory = () => {
        navigate(-1)
    }
    console.log('window.location.href', window.location.href)
    console.log('process.env.REACT_APP_URL', process.env.REACT_APP_URL)
    console.log('window.location.href !== process.env.REACT_APP_URL', window.location.href !== process.env.REACT_APP_URL + '/')
    useEffect(() => {
        if(window.location.href !== process.env.REACT_APP_URL + '/') {
            setType('secondary')
        }
    }, [])
    return (
        <div className={`header block ${type}`}>
            {
            type === 'primary' 
            ? (<img src={restoData.logo} alt={restoData.restaurantName} width={350} /> ) 
            : (<SearchField />) }
            
            
            {(
                window.location.href !== process.env.REACT_APP_URL + '/' && <a className="btn-back" onClick={backHistory} href="#"></a>
            )}
            
        </div>
    )
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
export default RyoHeader