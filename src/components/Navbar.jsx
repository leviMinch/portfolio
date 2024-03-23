import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Navbar.css';
import { GoHome, GoHomeFill } from "react-icons/go";


function Navbar(){
    return(
        <nav>
            <NavLink to="/" exact className='title' activeClassName='active'>
                {({ isActive }) => (isActive ? <GoHomeFill /> : <GoHome />)}
            </NavLink>
            <ul>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;