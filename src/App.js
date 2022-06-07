import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import './App.css';
import Category from './pages/Category';
import Headers from './pages/Headers';
import AllItems from './pages/AllItems';
import Item from "./pages/Item"
import Cart from './pages/cart';
import { useState } from "react"
function App() {
  const [cart,useCart] = useState([])
  
  return <div >
    <Router>
    <header>
<Headers/>
</header>
      <div className='home'>
      <Cart cart={cart}/>
      <Routes>
        <Route path='/' element={<Category />} />
        <Route path='/category/:cat' element={<AllItems />} />
        <Route path='/products/:item' element={<Item useCart={useCart} cart={cart}/>} />
      </Routes>
      </div>
    </Router>
 
   
  </div>
}

export default App;
