
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from '../src/Components/Sidebar.js';
import Dashboard from './Pages/Dashboard';
import Suppliers from './Pages/Suppliers';
import Customer from './Pages/Customer';
import Products from './Pages/Products';
import Purchase from './Pages/Purchase';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Sidebar />
            <Switch>
             <Route path="/" component={Dashboard} exact/>
             <Route path="/Suppliers" component={Suppliers}/>
             <Route path="/Customer" component={Customer}/>
             <Route path="/Products" component={Products}/>
             <Route path="/Purchase" component={Purchase}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;