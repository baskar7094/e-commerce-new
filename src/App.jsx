import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/layout'
import Home from './components/home/home'












export default function App() {
  var w =innerWidth
  var h = innerHeight
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}
