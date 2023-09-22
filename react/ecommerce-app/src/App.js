import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Cart from './Cart';
import Employees from './Employees';
import ProductDetails from './ProductDetails';

function App() {
  const isHome=true;
  return (
    <div className="App">
      <Navbar/>
        <Routes>
        <Route path="/product-details" element ={<ProductDetails/>}></Route>
          <Route path="/employees" element ={<Employees/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path='/' element={<Home/>}></Route>  
        </Routes>  
        <Footer/>  
    </div>
  );
}

export default App;
