import React, { useState, useRef, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
const Header = ({}) => {
  return (
    <>
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
          <div class="mx-auto order-0"></div>
          <div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item border border-light">
                <a class="nav-link btn" aria-current="page" href="#">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li class="nav-item border border-light">
                <a class="nav-link btn" aria-current="page" href="#">
                  <Link to="/art">Art / Generative Stuff</Link>
                </a>
              </li>
              <li class="nav-item border border-light">
                <a class="nav-link btn" aria-current="page" href="#">
                  <Link to="/contact">Contact Me</Link>
                </a>
              </li>
              <li class="nav-item border border-light">
                <a class="nav-link btn" aria-current="page" href="#">
                  <Link to="/tools">Tools</Link>
                </a>
              </li>
            </ul>
          </div>
      </nav>
    </>
  )
}
export default Header
