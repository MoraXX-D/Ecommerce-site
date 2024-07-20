import {Routes,Route} from 'react-router-dom'
import './index.css'
import { useState } from 'react'
import './App.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Home from './components/Home.jsx';
import Categories from './components/Category.jsx';
import CategoryProducts from './components/categoryProduct.jsx';
import AllProducts from './components/allProduct.jsx'
import ProductDetail from './components/productDetail.jsx'
import CheckOut from './components/checkOut.jsx';
import Register from './components/customer/register.jsx'
import Login from './components/customer/login.jsx';
import Dashboard from './components/customer/dashboard.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/products' element={<AllProducts/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>
          <Route path='/customer/register' element={<Register/>}/>
          <Route path='/customer/login' element={<Login/>}/>
          <Route path='/customer/dashboard' element={<Dashboard/>}/>
          <Route path='/category/:category_slug/:category_id' element={<CategoryProducts/>}/>
          <Route path='/product/:product_slug/:product_id' element={<ProductDetail/>}/>
          
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App;