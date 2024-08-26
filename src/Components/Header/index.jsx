import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
        <div className="container">
            <h1 className="logo">
                <Link to="/">MovieHub</Link>
            </h1>
            </div>
    </header>
  )
}

export default Header