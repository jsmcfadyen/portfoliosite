import React, { useState, useRef, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import MainPage from '../../view/MainPage.js'
const Header = ({}) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
          <li>
            <Link to="/tools">Tools</Link>
          </li>
          <li>
            <Link to="/art">Art / Generative Code</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Header
