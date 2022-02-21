import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { Routes, Route, Link } from 'react-router-dom'
import MainPage from '../view/MainPage.js'
import ContactPage from '../view/ContactPage.js'
import ToolsPage from '../view/ToolsPage.js' 
import ArtPage from '../view/ArtPage.js' 

const LayoutDefault = () => (
  <>
    <Header />
    <main className="site-content">
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/tools" element={<ToolsPage/>} />
          <Route path="/art" element={<ArtPage/>} />
        </Routes>
      </div>
    </main>
    <Footer />
  </>
)

export default LayoutDefault
