import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <Route index element={Home}/>
          <Route />
          <Route />
        </Route> 
      </Switch>
    </BrowserRouter>
  )
}

export default App
