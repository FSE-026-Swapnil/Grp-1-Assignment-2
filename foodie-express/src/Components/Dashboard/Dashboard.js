import React, { Component, useState,useEffect } from 'react';
import {BrowserRouter,Route,Routes, Link} from 'react-router-dom';
import './Dashboard.css'
import { DashboardData } from './DashboardData';
import { IconContext } from 'react-icons';
import { getUser } from '../Common/Common';
import { BASE_URL } from '../../Constants/APIConstants'


function Dashboard() {
  const [active, setActive] = useState();
  const [activeOrders, setActiveOrders] = useState(0);
  const [complOrders, setComplOrders] = useState(0);
  const [cancOrders, setCancOrders] = useState(0);
  const user = getUser();
  let activeOrd = 0;
  let compOrd = 0;
  let cancOrd = 0;

  const fetchOrdersCount = () => {
    activeOrd = 0;
    compOrd = 0;
    cancOrd = 0;
    fetch(BASE_URL + 'orders?orderedBy=' + user.id, {
        method: "GET"
    }).then((response) => {
        return response.json();
    })
    .then((resp) => {
        if(resp.length > 0){
            resp.forEach((item) => {
                console.log(resp);
                if(item.status === 'placed'){
                    activeOrd += 1;
                    setActiveOrders(activeOrd);
                }else if(item.status === 'completed'){
                    compOrd += 1;
                    setComplOrders(compOrd);
                }else if(item.status === 'cancelled'){
                    cancOrd += 1;
                    setCancOrders(cancOrd);
                }
            })
        }
    });
  }

  useEffect(() => {
    fetchOrdersCount();
  },[])
  
  
  return (
    <div className='dasboard-container'>
        <IconContext.Provider value={{ color: '#fff' }}>
            <nav className={'nav-menu active'}>
                <ul className='nav-menu-items'>
                    {DashboardData.map((item, index) => {
                    return (
                        <li key={index} className={`nav-text ${active == item && 'selected'}`} onClick={() => setActive(item)}>
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
        <div>
            <h1 className='greet-user'>Welcome, User</h1>
            <div className='dash-data'>
                <div className='activeBox'>
                    <span>ACTIVE ORDERS</span>
                    <div>{activeOrders}</div>
                </div>
                <div className='completedBox'>
                    <span>COMPLETED ORDERS</span>
                    <div>{complOrders}</div>
                </div>
                <div className='cancelledBox'>
                    <span>CANCELLED ORDERS</span>
                    <div>{cancOrders}</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Dashboard