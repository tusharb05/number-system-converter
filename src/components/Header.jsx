import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand link" to="/calculate" style={{color: 'white'}}>Number System Converter</Link>
                </div>
            </nav>
        </div>
    )
}

export default Header
