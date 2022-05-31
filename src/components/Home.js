import React, { useState, useEffect } from "react";
import "../css/Home.css";
import Post from "./Post"
import axios from "axios";
import BottomNavBar from "./BottomNav";
import ImageUpload from "./ImageUpload";

function Home() {
    return (
        < div className="app" >
            <div className="header">
                <img
                    className="headerImg"
                    src=" https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt="Instagram original logo"
                />
                <img className="more" src="/img/more.png" />
                <img className="like" src="/img/heart.png" />
                <img className="messenger" src="/img/messenger.png" />
            </div>
            <Post />
            <BottomNavBar />
        </div >
    );
}

export default Home;