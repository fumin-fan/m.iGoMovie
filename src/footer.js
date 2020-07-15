import React from 'react';
import {Link} from 'react-router-dom';
import footer_pic from './img/footer_pic.jpg';

export default function Footer(){
    return (
        <div id="footer">
            <div style={{display:"flex", justifyContent:"center"}}>
                <Link className="limit-days-free" to="#"><img src={footer_pic} alt="" /></Link>
            </div>
            <div className="footer-seolink">
                <div>
                    <Link className="link" to="#">About US</Link>
                    <Link className="link" to="#">DMCA</Link>
                    <Link className="link" to="#">Privacy Policy</Link>
                    <Link className="link" to="#">Terms of Service</Link>
                </div>
                <div>
                    <Link className="link" to="#">Disclaimer</Link>
                    <Link className="link" to="#">Contact US</Link>
                </div>
                <div>
                    Copyright ©2020 iGoMovie.com
                </div>
            </div>
        </div>
        
    );
}