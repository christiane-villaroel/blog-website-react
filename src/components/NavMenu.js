import React from "react";

const NavMenu = () =>{
    return (
        <nav>
            <ul>
                <li id="nav-login" className="link-containers jura">
                    <a href="login.html"> <img id="login-icon" src="img/person-fill-svgrepo-com.svg"/> Login </a>
                </li>
                <li className="link-containers jura">
                    <a href="#"> Sign-Up</a>
                </li>
                <li className="link-containers jura">
                    <a href="home.html">Home</a>
                </li>
                <li className="link-containers jura">
                    <a href="#">Posts</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavMenu;