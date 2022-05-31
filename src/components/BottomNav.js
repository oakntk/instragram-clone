import React from 'react'
import "../css/BottomNav.css"
import { Link, useNavigate } from "react-router-dom";
import ImageUpload from './ImageUpload'

const BottomNav = () => {
    const navigate = useNavigate();
    return (
        <div class="navbar">
            <img className="homepage" src="./img/homepage.png" />
            <img className="search" src="./img/search.png" />
            <Link to="/ImageUpload">
                <img className="add" src="./img/more.png" onClick = {()=> {
                    navigate("/ImageUpload")
                }} />
            </Link>
            <img className="bag" src="./img/bag.png" />
            <img className="account" src="./img/account.png" />
        </div>
    )
}

export default BottomNav