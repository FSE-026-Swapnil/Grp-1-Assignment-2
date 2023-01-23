import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'
import Header from './Components/Layout/Header/Header';
import Footer from './Components/Layout/Footer/Footer';
import Routers from './Routers/Routers';




function App() {
  return (
    <div class="container-fluid p-0">
      <BrowserRouter >
        <Header />
        <Routers/>  
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App