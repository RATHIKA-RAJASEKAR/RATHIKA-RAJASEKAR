import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
      
  },
  {
    title: 'Contact',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
   
    
subNav: [
    {
    title: 'Suppliers',
    path: '/Suppliers',
    icon:<IoIcons.IoMdPeople />,
      },
  {
    title: 'Customer',
    path: '/Customer',
    icon:<IoIcons.IoIosPaper />,
      }
    ]
  },
  {
    title: 'Items / Products',
    path: '/Products',
    icon:  <FaIcons.FaCartPlus />,
   
  },
  
  {
    title: 'Purchase',
    path: '/Purchase',
    icon: <IoIcons.IoIosPaper />,
    
  },
  {
    title: 'Sales',
    path: '/Sales',
    icon: <IoIcons.IoMdHelpCircle />,
    
  },
  {
    title: 'Manage Organisation',
    path: '/Manage Organisation',
    icon: <IoIcons.IoIosPaper />,
   
  }
];