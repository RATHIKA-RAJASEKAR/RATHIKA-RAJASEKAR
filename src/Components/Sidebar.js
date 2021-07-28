import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Sidebar.css'; 
import Dropdown from "@material-tailwind/react/Dropdown"
import DropdownItem from "@material-tailwind/react/DropdownItem"
import DropdownLink from "@material-tailwind/react/DropdownLink"
import Suppliers from "../Pages/Suppliers";
//import Suppliers from "../src/Pages/Suppliers.js";
//import Customer from "../src/Pages/Customer.js";
//import Products from "../src/Pages/Products.js";
//import Purchase from "../src/Pages/Purchase.js";

const routes = [
  {
    path: "/",
    exact: true,
    
    main: () => <h2>Home</h2>
  },
  {
    path: "/Suppliers.js",
    
    main: () =><h2>Supplier</h2>
  },
  {
    path: "/Customer.js",
    
    main: () =><h2>Customer</h2>
  },
  {
    path: "/Products.js",
    
    main: () =><h2>Products</h2>
  },
  {
    path: "/Sales.js",
    
    main: () =><h2>Sales</h2>
  },
  {
    path: "/Purchase.js",
    
    main: () =><h2>Purchase</h2>
  },
  {
    path: "/Company.js",
    
    main: () =><h2>Company</h2>
  },
  {
    path: "/Reports.js",
    
    main: () =><h2>Reports</h2>
  },
  {
    path: "/Organisation.js",
    
    main: () =><h2>Organisation</h2>
  },
  {
    path: "/Team.js",
    main: () =><h2>Team</h2>
  },
];


export default function Sidebar()  {
  return (
    <Router>
      <div className="flex flex-wrap bg-white-500 w-full h-screen">

      <div class="w-3/12 bg-green-400 rounded-r-lg p-3 shadow-lg">

           <div class="flex items-center space-x-4 p-2 mb-5">
                    <div>
                        <h4 class="font-semibold text-lg my-4 text-gray-700 capitalize font-poppins tracking-wide">My React App</h4>
                        <span class="text-sm tracking-wide flex items-center space-x-1">
                                                  </span>
                    </div>
                </div>
          <ul class="space-y-2 text-sm">
            <li>
            
              <Link to="/" class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <span class="text-gray-600">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span><span>Dashboard</span></Link>
            </li>
            <li class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
               <span class="text-gray-600">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                                </svg>
                            </span>
                            <Dropdown
            className="flex items-center  text-gray-700 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            placement="bottom-start"
            buttonText="Contact Us"  >
             <div className=" relative">
            <DropdownItem
               class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            onClick={(e) => e.preventDefault()}
            > <Link to="/Suppliers.js" 
                class="flex items-center space-x-3 text-gray-700 p-2
                 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200
                  focus:shadow-outline">
            Suppliers  </Link> 
            </DropdownItem>

            <DropdownItem
               class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            onClick={(e) => e.preventDefault()}
            > <Link to="/Customer.js" 
                class="flex items-center space-x-3 text-gray-700 p-2
                 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200
                  focus:shadow-outline">
            Customer </Link> 
            </DropdownItem>
            </div>
        
        </Dropdown>
            </li>
            <li>
              <Link to="/Products.js" class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <span class="text-gray-600">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                                </svg>
                            </span>
                            <span>Items / Products</span></Link>
            </li>
            <li>
              <Link to="/Sales.js" class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                        
                            <span>Sales</span></Link>
            </li>
            <li>
              <Link to="/Purchase.js" class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <span class="text-gray-600">
              <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </span>
                            <span>Purchase</span></Link>
            </li>
            <li>
              <Link to="/Company.js" class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span class=" text-gray-600">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </span>
                            <span>Cost To Company</span></Link>
            </li>
            <li>
              <Link to="/Reports.js" class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span class="text-gray-600">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                                </svg>
                            </span>
                            <span>Reports</span></Link>
            </li>
            <li>
              <Link to="/Organisation.js" class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span class="text-gray-600">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>
                            <span>Manage Organisation</span></Link>
            </li>
            <li>
              <Link to="/Team.js" class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span class="text-gray-600">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </span>
                            <span>Manage Team</span></Link>
            </li>
           

           


          </ul>

         
        </div>
       
        <div className="flex-row  w-9/12" >
        <header>
          <div className="flex flex-row-reverse py-5 px-5">
          
        <div className="right-0 text-green-400 mx-3 my-1 py-1">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
</svg>   </div><form action="/" method="get">
        
        <input className="border-2 border-green-400 mx-2 py-1 px-3 rounded-full "
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
        />
        <button className="bg-green-400 px-3 py-1 hover:bg-green-200 rounded-full" type="submit">Search</button>
    </form></div>
            </header>
        <div className="flex-row mx-4 h-full rounded border-dashed border-4 border-green-400	 bg-white-100 w-full p-10 w-9/12" >
          <Switch >
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        
</div>
    
    </div>
    </div>
    </Router>
  );
}
