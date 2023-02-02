import React, { Component } from 'react';
import {BrowserRouter,Route,Routes, Link} from 'react-router-dom';
import './Dashboard.css'
import { DashboardData } from './DashboardData';
import { IconContext } from 'react-icons';

function Dashboard() {
  return (
    <div>
        <IconContext.Provider value={{ color: '#fff' }}>
            {/* <div className='navbar'>
            <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            </div> */}
            <nav className={'nav-menu active'}>
                <ul className='nav-menu-items'>
                    {/* <li className='navbar-toggle'>
                    <Link to='#' className='menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                    </li> */}
                    {DashboardData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                        </li>
                    );
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
    </div>
  );
}

export default Dashboard