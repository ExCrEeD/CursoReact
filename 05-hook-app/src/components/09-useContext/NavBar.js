import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">UseContext</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink
                        activeclassname="active"
                        className="nav-link " to="./">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        activeclassname="active"
                        className="nav-link " to="./about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        activeclassname="active"
                        className="nav-link " to="./login">Login</NavLink>
                </li>
            </ul>
        </nav>
    )
}
