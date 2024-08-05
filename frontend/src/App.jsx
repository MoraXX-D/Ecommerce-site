import { Routes, Route } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { CartContext } from './context.js'


import './index.css'
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
import CustomerLogout from './components/customer/customerLogout.jsx';
import Dashboard from './components/customer/dashboard.jsx';
import Orders from './components/customer/orders.jsx';
import OrderSuccess from './components/orderSuccess.jsx';
import OrderFailed from './components/orderFail.jsx';
import UpdateProfile from './components/customer/updateProfile.jsx';
import ChangePassword from './components/customer/changePassword.jsx';
import Wishlist from './components/customer/wishlist.jsx';
import AddressList from './components/customer/addressList.jsx';
import AddAddress from './components/customer/addAddress.jsx';
import SellerLogin from './components/seller/seller_login.jsx';
import SellerRegister from './components/seller/seller_register.jsx';
import SellerDashboard from './components/seller/seller_dashboard.jsx';
import SellerProducts from './components/seller/products.jsx';
import AddProduct from './components/seller/add_product.jsx';
import SellerOrders from './components/seller/seller_orders.jsx';
import Customers from './components/seller/customers.jsx';
import Reports from './components/seller/report.jsx';
import UpdateSellerProfile from './components/seller/update_seller_Profile.jsx';
import ChangeSellerPassword from './components/seller/changePassword.jsx';


function App() {

    // Get the cart data from localStorage and handle potential errors
    const [cartData, setCartData] = useState(() => {
      try {
        const savedCart = localStorage.getItem('cartData');
        return savedCart ? JSON.parse(savedCart) : [];
      } catch (error) {
        console.error("Failed to parse cart data from localStorage", error);
        return [];
      }
    });
  
    useEffect(() => {
      // Save cart data to localStorage whenever it changes
      localStorage.setItem('cartData', JSON.stringify(cartData));
    }, [cartData]);

  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/customer/register' element={<Register />} />
        <Route path='/customer/login' element={<Login />} />
        <Route path='/customer/logout' element={<CustomerLogout />} />
        <Route path='/customer/dashboard' element={<Dashboard />} />
        <Route path='/customer/orders' element={<Orders />} />
        <Route path='/order/success' element={<OrderSuccess />} />
        <Route path='/order/failed' element={<OrderFailed />} />
        <Route path='/customer/profile' element={<UpdateProfile />} />
        <Route path='/customer/wishlist' element={<Wishlist />} />
        <Route path='/customer/address' element={<AddressList />} />
        <Route path='/customer/add-address' element={<AddAddress />} />
        <Route path='/customer/profile/password' element={<ChangePassword />} />
        <Route path='/category/:category_slug/:category_id' element={<CategoryProducts />} />
        <Route path='/product/:product_slug/:product_id' element={<ProductDetail />} />


        # Seller
        <Route path='/seller/login' element={<SellerLogin />} />
        <Route path='/seller/register' element={<SellerRegister />} />
        <Route path='/seller/dashboard' element={<SellerDashboard />} />
        <Route path='/seller/Product' element={<SellerProducts />} />
        <Route path='/seller/add-product' element={<AddProduct />} />
        <Route path='/seller/orders' element={<SellerOrders />} />
        <Route path='/seller/customers' element={<Customers />} />
        <Route path='/seller/reports' element={<Reports />} />
        <Route path='/seller/profile/update' element={<UpdateSellerProfile />} />
        <Route path='/seller/change-pass' element={<ChangeSellerPassword />} />
      </Routes>
      <Footer />
    </CartContext.Provider>
  )
}

export default App;