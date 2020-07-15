
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import top_bar from './img/top_bar.jpg';
import v_poster from './img/v_poster.jpg';
import primelogo from './img/primelogo.png';
import {CaretRightFilled} from '@ant-design/icons';
import amazon from './img/amazon.png';
import hbo from './img/hbo.png';
import showtime from './img/showtime.png';
import starz from './img/starz.png';
import cinemax from './img/cinemax.png';
import shudder from './img/shudder.png';
import similarMovie from './img/similarMovie.jpg';
import similarMovie2 from './img/similarMovie2.jpg';


export default function Content(){

    useEffect(() =>{
        let list = document.querySelector('.movies-list');
        let startPoint = 0;
        let startEl = 0;
        css(list,"translateZ",0.01);
        list.addEventListener('touchstart', function(e) {
            startPoint = e.changedTouches[0].pageX;
            startEl = css(list,"translateX");
        });
        list.addEventListener('touchmove', function(e) {
            let nowPoint = e.changedTouches[0].pageX;
            let dis = nowPoint - startPoint;
            let translateX = startEl + dis;
            css(list,"translateX",translateX);
        });
        list.addEventListener('touchend', function(e) {
            if(css(list,"translateX") > 0){
                css(list,"translateX",0);
            }
        });
        function css(element, attr , val){
            if(attr === "translateX"||attr === "translateY"
            ||attr === "translateZ") {
                return cssTransform(element, attr, val);
            }
            if(arguments.length === 2){
                let val = getComputedStyle(element)[attr];
                return parseFloat(val);
            } 
            element.style[attr]= val + "px";	   
        }
        function cssTransform(element, attr, val){
            if(!element.transform){
                element.transform = {};
            }	
            if(typeof val === "undefined"){ 
                if(typeof element.transform[attr] === "undefined"){
                    switch(attr){
                        case "scale":
                        case "scaleX":
                        case "scaleY":
                        case "scaleZ":
                            element.transform[attr] = 100;
                            break;
                        default:
                            element.transform[attr] = 0;	
                    }
                } 
                return element.transform[attr];
            } else {
                element.transform[attr] = val;
                var transformVal  = "";
                for(var s in element.transform){
                    switch(s){
                        case "scale":
                        case "scaleX":
                        case "scaleY":
                        case "scaleZ":
                            transformVal += " " + s + "("+(element.transform[s]/100)+")";
                            break;
                        case "rotate":
                        case "rotateX":
                        case "rotateY":
                        case "rotateZ":
                        case "skewX":
                        case "skewY":
                            transformVal += " " + s + "("+element.transform[s]+"deg)";
                            break;
                        default:
                            transformVal += " " + s + "("+element.transform[s]+"px)";				
                    }
                }
                element.style.WebkitTransform = element.style.transform = transformVal;
            }
        }

    }, []);

    return (
        <div className="movie-detail">
            <div className="thumb">
                <img src={top_bar} alt="Bad Boys for Life" />
            </div>
            <div className="movie_intro">                        
                <img src={v_poster} alt="" />
                <div className="ctx">
                    <div className="tit">Bad Boys for Life</div>
                    <div className="date">R | 15 January 2020 (USA)</div>
                    <div className="star">Will Smith | Martin Lawrence | Paola Nuñez | </div>
                    <div className="genre">
                        <Link to='#'>action</Link>
                        <Link to='#'>thriller</Link>
                    </div>
                </div>       
            </div>
            <div className="primeVideo">
                <span>AD</span>
                <img src={primelogo} alt="" /> Watch $0.0 with Prime
                <Link to="#">Start 30-day Free Trial</Link>
            </div>
            <div className="trailers-images">
                <div className="widget-navs">
                    <div className="widget-tit">
                        <span>Bad Boys for Life</span>
                        <span>Trailers</span>
                    </div>                         
                </div>
                <div style={{padding:"5px"}}>
                    <iframe 
                        src="https://www.youtube.com/embed/jKCj3XuPG8M" 
                        frameBorder="0" 
                        allowFullScreen="" 
                        style={{width: "100%", height: "250px"}}
                        title="play"
                    >
                    </iframe>
                </div>
                <div className="movie-intro">
                    <p>
                        Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.
                    </p>
                </div>
            </div>
            <div className="source-list">
                <div className="source-list-tit"> 
                    <div className="text">
                        <CaretRightFilled  />
                        <span>Watch</span>
                        <span>Bad Boys for Life</span>
                        <span>Full Movie</span>
                    </div>
                </div>
                <div className="source-list-link">
                    <Link to="#">
                        <div className="source-list-link-item">
                            <span className="AD">AD</span>
                            <div className="s1">
                                <span style={{display: "table-cell", verticalAlign: "middle"}}><img src={amazon} alt="" className="amazon_pic" /></span>
                            </div>
                            <div className="s2">
                                <span className="btn">Start Free Trial</span>
                            </div>
                        </div>
                    </Link>   
                </div>
            </div>
            <div style={{backgroundColor: "#1B1B1B"}}>
                <div className="source-list-tit"> 
                    <div className="text">
                        <CaretRightFilled  />
                        <span>Free Trial Channels</span>
                    </div>
                </div>
                <div className="source-list-link">
                    <Link to="#">
                        <div className="source-list-link-item">
                            <div className="s1">
                                <span style={{display: "table-cell", verticalAlign: "middle"}}><img src={amazon} alt="" className="amazon_pic" /></span>
                            </div>
                            <div className="c2">Amazon Prime</div>
                            <div className="c3">
                                <span className="link">Try it Free &gt;</span>
                            </div>
                        </div>
                    </Link>   
                </div>
                <div className="source-list-link">
                    <Link to="#">
                        <div className="source-list-link-item">
                            <div className="s1">
                                <span style={{display: "table-cell", verticalAlign: "middle"}}><img src={hbo} alt="" className="amazon_pic" /></span>
                            </div>
                            <div className="c2 c2_">HBO + Prime</div>
                            <div className="c3">
                                <span className="link">Try it Free &gt;</span>
                            </div>
                        </div>
                    </Link>   
                </div>
                <div className="source-list-link">
                    <Link to="#">
                        <div className="source-list-link-item">
                            <div className="s1">
                                <span style={{display: "table-cell", verticalAlign: "middle"}}><img src={showtime} alt="" className="amazon_pic" /></span>
                            </div>
                            <div className="c2 c2_">SHOWTIME + Prime</div>
                            <div className="c3">
                                <span className="link">Try it Free &gt;</span>
                            </div>
                        </div>
                    </Link>   
                </div>
                <div className="source-list-link">
                    <Link to="#">
                        <div className="source-list-link-item">
                            <div className="s1">
                                <span style={{display: "table-cell", verticalAlign: "middle"}}><img src={starz} alt="" className="amazon_pic" /></span>
                            </div>
                            <div className="c2 c2_">STARZ + Prime</div>
                            <div className="c3">
                                <span className="link">Try it Free &gt;</span>
                            </div>
                        </div>
                    </Link>   
                </div>
                <div className="source-list-link">
                    <Link to="#">
                        <div className="source-list-link-item">
                            <div className="s1">
                                <span style={{display: "table-cell", verticalAlign: "middle"}}><img src={cinemax} alt="" className="amazon_pic" /></span>
                            </div>
                            <div className="c2 c2_">Cinemax + Prime</div>
                            <div className="c3">
                                <span className="link">Try it Free &gt;</span>
                            </div>
                        </div>
                    </Link>   
                </div>
                <div className="source-list-link">
                    <Link to="#">
                        <div className="source-list-link-item">
                            <div className="s1">
                                <span style={{display: "table-cell", verticalAlign: "middle"}}><img src={shudder} alt="" className="amazon_pic" /></span>
                            </div>
                            <div className="c2 c2_">SHUDDER + Prime</div>
                            <div className="c3">
                                <span className="link">Try it Free &gt;</span>
                            </div>
                        </div>
                    </Link>   
                </div>
            </div>
            <div className="similarMovie">
                <div className="similarMovie_tit">Similar Movies to Bad Boys for Life</div>
                <ul className="movies-list">
                    <li>
                        <Link to="#"><img src ={similarMovie} alt="" /></Link>
                        <p>I Spit on Your Grave III: Vengeance is Mine</p>
                        <span>2015</span>
                    </li>
                    <li>
                        <Link to="#"><img src ={similarMovie2} alt="" /></Link>
                        <p>I Spit on Your Grave III: Vengeance is Mine</p>
                        <span>2017</span>
                    </li>
                    <li>
                        <Link to="#"><img src ={similarMovie} alt="" /></Link>
                        <p>I Spit on Your Grave III: Vengeance is Mine</p>
                        <span>2015</span>
                    </li>
                    <li>
                        <Link to="#"><img src ={similarMovie2} alt="" /></Link>
                        <p>I Spit on Your Grave III: Vengeance is Mine</p>
                        <span>2017</span>
                    </li>
                    <li>
                        <Link to="#"><img src ={similarMovie} alt="" /></Link>
                        <p>I Spit on Your Grave III: Vengeance is Mine</p>
                        <span>2015</span>
                    </li>
                    <li>
                        <Link to="#"><img src ={similarMovie2} alt="" /></Link>
                        <p>I Spit on Your Grave III: Vengeance is Mine</p>
                        <span>2017</span>
                    </li>
                </ul>
            </div>

        </div>
    );
}