
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
           