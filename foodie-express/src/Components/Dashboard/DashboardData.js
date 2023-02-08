import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const DashboardData = [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <FaIcons.FaHome />,
        cName: 'nav-text selected'
      },
      {
        title: 'Search Restaurant',
        path: '/search',
        icon: <FaIcons.FaSearch />,
        cName: 'nav-text'
      },
      {
        title: 'Previous Orders',
        path: '/completedOrder',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
      },
      {
        title: 'Active Order',
        path: '/activeOrder',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
      }
];