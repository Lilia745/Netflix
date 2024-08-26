import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../../Pages/Home/pages'

function Header() {
  return (
    <header className="header">
        <div className="container">
            <h1 className="logo">
                <Link to="/">
                    <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-symbol.jpg" alt="" id="logo"/>
                </Link>
            </h1>
        </div>
    </header>
  )
}

export default Header