import React from 'react'
import {Link}  from "react-router-dom"
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
    <Link to="/" className='title'>
    React Quiz App
    </Link>

    <hr className='hr'/>
      
    </div>
  )
}

export default Header