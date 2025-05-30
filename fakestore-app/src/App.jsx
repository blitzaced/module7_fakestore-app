import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import AddProduct from './components/AddProduct'
import NavigationBar from './components/NavigationBar'
import ProductDetails from './components/ProductDetails'
import ProductList from './components/ProductList'
import EditProduct from './components/EditProduct'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <>
      <NavigationBar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/editproduct" element={<EditProduct />} />
        </Routes>
      </Router>
    </>  
  )
}

export default App
