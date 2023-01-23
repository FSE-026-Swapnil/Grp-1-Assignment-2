import React from "react";
import './Header.css';
import { Link } from "react-router-dom";
import brand from '../../../Asset/brand.png';

const Header = () => {
    return(
        <header>
            <div class="header">
                <img src={brand} class="brand-logo" width="260" height="80" alt="App Logo" />
                <ul>
                    <li><Link to="/login">LOGIN</Link></li>
                    <li><a href="">RAIL TOOLS</a></li>
                    <li><a href="">GROUP ORDER</a></li>
                    <li><a href="">TRACK ORDER</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;