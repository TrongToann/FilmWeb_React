import {Link, Navigate, useNavigate } from "react-router-dom"
import initializeAuthentication from "../Firebase/firebase.init";
import {getAuth, signInWithPopup,  GoogleAuthProvider } from "firebase/auth" ;
import { useState } from "react";

initializeAuthentication() ; 
const provider = new GoogleAuthProvider();


    
function Header() {
    let navigate = useNavigate();
    const handleLogout = () => {
            localStorage.clear('loginUser') 
            navigate("/"); 
    }
    const handleChange = () => {
            navigate("/FilmList"); 
    }
     
    return (
       
        <div class="grid_full" >
        <div class="grid"> 
            <header class="header" > 
                <div class="container_header"  >
                    <div class="header_first">
                        <div class="header_logo">
                            <img src="assets/logooo.png" alt="" />
                        </div>
                        <ul class="header_list_navbar">
                            <Link style={{textDecoration : 'none', margin: 'auto'}} to={``}>   
                                <li class="navbar_item"><a href="">Home</a></li>
                            </Link>
                            
                                <Link to={`contact`} style={{textDecoration : 'none', margin: 'auto'}}>   
                                    <li class="navbar_item"><a href="">Contact</a></li>
                                </Link> 

                                <div style={{textDecoration : 'none', margin: 'auto'}}> 
                                     <li class="navbar_item"   onClick={handleChange}><a href="">Live</a></li>
                                </div>
                        </ul>
                    </div>
                    <div class="header_second">
                        <div class="header_search">
                            <input type="text" class="header_search_input" placeholder="I'm Looking for..."/>
                            <i class="fa-solid fa-magnifying-glass search_button_header"></i>
                        </div>
                        <div class="header_info">
                                    <div>
                                        <button onClick={handleLogout} >Log Out</button> 
                                    </div>
                                   
                        </div>
                    </div>
                </div>
            </header>
        </div>
     </div>   
    )
}
export default Header ;