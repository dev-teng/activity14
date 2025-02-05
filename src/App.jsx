import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Error from './Error';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="services" element={<Services />}/>
          <Route path="contact" element={<Contact />}/> 
          <Route path="*" element ={<Error />}/>
        </Route> 
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
