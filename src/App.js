import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Features from './components/Features';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import ProductCart from './components/ProductCart';
import ProductCheckout from './components/ProductCheckout';


function App() {
  return (
    <>
    <Router>
      <div className="App">
          <Header/>
          <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/feature' element={<Features/>}/>
              <Route exact path='/product' element={<Product/>}/>
              <Route exact path='/product/:id' element={<ProductDetail/>}/>
              <Route exact path='/cart' element={<ProductCart/>}/>
              <Route exact path='/checkout' element={<ProductCheckout/>}/>
          </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
