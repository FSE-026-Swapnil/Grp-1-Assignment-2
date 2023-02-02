import React from "react";
import './Header.css';
import { Link } from "react-router-dom";
import brand from '../../../Asset/brand.png';
import profile from '../../../Asset/user.png'
import { getUser, removeUserSession } from "../../Common/Common";

const Header = () => {
    const user = getUser();
    console.log("user==>",user);

    const logoutHandler = () => {
        removeUserSession();
        console.log("user==>",user);
    }
    
    return(
        <header>
            <div class="header">
                <img src={brand} class="brand-logo" width="260" height="80" alt="App Logo" />
                <ul>
                    { !user.email && <li><Link to="/login">LOGIN</Link></li>}
                    { user.email && <li onClick={logoutHandler}><img src={profile} width="30" height="30"></img>Logout</li>}
                    <li><a href="">RAIL TOOLS</a></li>
                    <li><a href="">GROUP ORDER</a></li>
                    <li><a href="">TRACK ORDER</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;