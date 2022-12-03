import React from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Order from './components/Order/Order';
import Products from './components/Products/Products';
import Productpage from './Screen/productpage';
import Productscreen from './Screen/productscreen';
import Introduce from './components/introduce/Introduce';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
const mystyle = {
  margin:"200px"
};
const AppLayout = () => (
<div>
<Navbar/>
<Header/>
<Introduce/>
<Products/>
<Order/>
<Gallery/>
<Intro/>
<Footer/>
</div>);
const ProductLayout = ()=>(
  <div>
  <Navbar/>
  <main style={mystyle}>
  <Container>
    
    
    <Productpage/>
    
    
  </Container>
  </main>
  </div>
);
function App() {
  return (
   <Router>
      <Routes>
      <Route path="/" element={<AppLayout/>}/>
      <Route path="/product" element={<ProductLayout/>}>
        <Route index element={<Productpage />} />
        
      </Route>
      <Route path='/product/:id' element={<Productscreen/>}/>
    
 
      </Routes>
    </Router>
    
  );
}

export default App;