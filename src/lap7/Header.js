import {Link, Navigate, useNavigate } from "react-router-dom"
import initializeAuthentication from "../Firebase/firebase.init";
import {getAuth, signInWithPopup,  GoogleAuthProvider } from "firebase/auth" ;
import { useState } from "react";

initializeAuthentication() ; 
const provider = new GoogleAuthProvider();


    
function Header() {
    const loginUser = false ;
    let navigate = useNavigate();
    const handleGoogleSignIn = () => {
    const auth = getAuth() ; 
        
    signInWithPopup(auth, provider)
    .then(result => {
        const user = result.user ; 
        if (user) {
            localStorage.setItem('loginUser', user)  
            navigate("/Login"); 
         } 
    }) 
    }
     
    return (
       
        <div class="grid_full">
        <div class="grid"> 
            <header class="header"> 
                <div class="container_header">
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
                                {/* { userLogin && firstCome && (
                                    <div>
                                        <Link to={`FilmList`} style={{textDecoration : 'none'}}>   
                                             <li class="navbar_item"><a href="">Live</a></li>
                                        </Link>
                                    </div>
                                )} */}
                                 
                        </ul>
                    </div>
                    <div class="header_second">
                        <div class="header_search">
                            <input type="text" class="header_search_input" placeholder="I'm Looking for..."/>
                            <i class="fa-solid fa-magnifying-glass search_button_header"></i>
                        </div>
                        <div class="header_info">
                                    <div>
                                        <button onClick={handleGoogleSignIn} >Sign up</button> 
                                    </div>
                                    {/* <div>
                                         <Link style={{textDecoration : 'none'}} to={``}>
                                                <button onClick={handleLogout} >Logout</button>
                                        </Link>
                                    </div> */}
                        </div>
                    </div>
                </div>
            </header>
        </div>
     </div>   
    )
}
export default Header ;