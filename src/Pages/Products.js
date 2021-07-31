import React from 'react'

const Products = () => {
    return (
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
         
        
</div>
    
    </div>
    
   
    )
}

export default Products
