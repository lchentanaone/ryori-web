import React from "react"
import restoData from "../../mockData/resto-data.ts";
import { useNavigate } from "react-router-dom";
import './ryo-header.scss'
const RyoHeader = () => {
    const navigate = useNavigate();
    const backHistory = () => {
        navigate(-1)
    }
    console.log('window.location.href', window.location.href)
    console.log('process.env.REACT_APP_URL', process.env.REACT_APP_URL)
    console.log('window.location.href !== process.env.REACT_APP_URL', window.location.href !== process.env.REACT_APP_URL + '/')
    return (
        <div className="header block">
            <img src={restoData.logo} alt={restoData.restaurantName} width={350} />
            {(
                window.location.href !== process.env.REACT_APP_URL + '/' && <a className="btn-back" onClick={backHistory} href="#"></a>
            )}
            
        </div>
    )
}
export default RyoHeader