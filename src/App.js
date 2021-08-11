
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from '../src/Components/Sidebar.js';
import Dashboard from './Pages/Dashboard';
import Suppliers from './Pages/Suppliers';
import Customer from './Pages/Customer';
import Products from './Pages/Products';
import Purchase from './Pages/Purchase';
import Sales from './Pages/Sales';

class App extends Component {
  render() {
    return (      
       <Router>
      
          <Sidebar />
            <Switch>
             <Route path="/" component={Dashboard} exact/>
            
             <Route path="/Customer" component={Customer}/>
             <Route path="/Products" component={Products}/>
             <Route path="/Purchase" component={Purchase}/>
             <Route path="/Sales" component={Sales}/>
            

 
           </Switch>
          
      
      </Router>
    );
  }
}
 
export default App;