
import './App.css';
import Sidebar from '../src/Components/Sidebar.js';
import Suppliers from '../src/Pages/Suppliers.js';

import { BrowserRouter as Router, Switch,
Route} from 'react-router-dom';



function App() {
  return (
        < >
        
    <Router>
    <Sidebar />
<Switch>
  <Route path='/' />
</Switch>
    </Router>
    <Suppliers/>
      </>
  );
}

export default App;
