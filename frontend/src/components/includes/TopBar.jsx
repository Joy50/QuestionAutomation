import React from 'react'
//import armylogo from '../images/army.png'
import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
    <div className='topBar'>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link to={'/dashboard'} className='nav-link'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/'} className='nav-link'>Tutorial</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/'} className='nav-link'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/'} className='nav-link'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
