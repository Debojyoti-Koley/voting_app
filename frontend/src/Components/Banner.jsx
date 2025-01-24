import React from "react";
import BannerImage from '../Images/Image.png'
import '../Style/banner.css'

function Banner(){
    return(
        <div className="outerContainer">
            <div className="textBox">
                <div className="subHeading1">Ready to</div>
                <div className="mainHeading">Choose the winner ?</div>
                <div className="subHeading2">Let Vote</div>
                <p className="bannerText">Online voting enables secure, digital election management and confidential voting.</p>
                <button className="bannerButton">Get Started</button>
            </div>
            <img src={BannerImage} className="bannerImage"/>
        </div>
    )
}
export default Banner;