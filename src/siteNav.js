import React from 'react';
import {Link} from 'react-router-dom';

export default function SiteNav(){
    return (
    <div className="site-nav">
        <ul>
            <li className="site-nav-item">
                <Link to="#" className="site-nav-link" >Free Movies</Link>
            </li>
            <li className="site-nav-item">
                <div>Movies</div>
                <ul>
                    <li>
                        <Link to="#" >Action</Link>
                    </li>
                    <li>
                        <Link to="#" >Adventure</Link>
                    </li>
                    <li>
                        <Link to="#" >Animation</Link>
                    </li>
                    <li>
                        <Link to="#" >Comedy</Link>
                    </li>
                    <li>
                        <Link to="#" >Crime</Link>
                    </li>
                    <li>
                        <Link to="#" >Documentary</Link>
                    </li>
                    <li>
                        <Link to="#" >Drama</Link>
                    </li>
                    <li>
                        <Link to="#" >Family</Link>
                    </li>
                    <li>
                        <Link to="#" >Fantasy</Link>
                    </li>
                    <li>
                        <Link to="#" >Foreign</Link>
                    </li>
                    <li>
                        <Link to="#" >History</Link>
                    </li>
                    <li>
                        <Link to="#" >Horror</Link>
                    </li>
                    <li>
                        <Link to="#" >Mystery</Link>
                    </li>
                    <li>
                        <Link to="#" >Romance</Link>
                    </li>
                    <li>
                        <Link to="#" >Science Fiction</Link>
                    </li>
                    <li>
                        <Link to="#" >TV Movie</Link>
                    </li>
                    <li>
                        <Link to="#" >Thriller</Link>
                    </li>
                    <li>
                        <Link to="#" >War</Link>
                    </li>
                    <li>
                        <Link to="#" >Western</Link>
                    </li>
                </ul>
            </li>
            <li className="site-nav-item">
                <div>TV Shows</div>
                <ul>
                    <li>
                        <Link to="#" >Action</Link>
                    </li>
                    <li>
                        <Link to="#" >Adventure</Link>
                    </li>
                    <li>
                        <Link to="#" >Animation</Link>
                    </li>
                    <li>
                        <Link to="#" >Comedy</Link>
                    </li>
                    <li>
                        <Link to="#" >Crime</Link>
                    </li>
                    <li>
                        <Link to="#" >Documentary</Link>
                    </li>
                    <li>
                        <Link to="#" >Drama</Link>
                    </li>
                    <li>
                        <Link to="#" >Family</Link>
                    </li>
                    <li>
                        <Link to="#" >Fantasy</Link>
                    </li>
                    <li>
                        <Link to="#" >Foreign</Link>
                    </li>
                    <li>
                        <Link to="#" >History</Link>
                    </li>
                    <li>
                        <Link to="#" >Horror</Link>
                    </li>
                    <li>
                        <Link to="#" >Mystery</Link>
                    </li>
                    <li>
                        <Link to="#" >Romance</Link>
                    </li>
                    <li>
                        <Link to="#" >Science Fiction</Link>
                    </li>
                    <li>
                        <Link to="#" >TV Movie</Link>
                    </li>
                    <li>
                        <Link to="#" >Thriller</Link>
                    </li>
                    <li>
                        <Link to="#" >War</Link>
                    </li>
                    <li>
                        <Link to="#" >Western</Link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    );
}