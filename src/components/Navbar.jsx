import React from 'react';
import {NavLink} from 'react-router-dom';
import { GoHome, GoHomeFill } from "react-icons/go";

function Navbar(){
    return(
        <nav className="fixed top-0 left-0 w-full z-50 py-4 bg-cyan-950 ">
            <div className="container mx-auto flex justify-between items-center text-white opacity-50 hover:opacity-100 transition-opacity duration-400">
                <div className="flex items-center">
                    <NavLink
                        to="/"
                        exact
                        className="title flex items-center text-5xl transition-all duration-400 ease-in-out hover:text-blue-400 transition-color duration-200"
                        activeClassName="active"
                    >
                        {({ isActive }) => (
                            <div className={`transition-opacity duration-400 ease-in-out ${isActive ? 'opacity-100' : 'opacity-50'}`}>
                                {isActive ? <GoHomeFill /> : <GoHome />}
                            </div>
                        )}
                    </NavLink>
                    <p className="text-3xl pl-2">Current Page</p>
                </div>
                
            
                <ul className="flex items-center text-2xl">
                    <li className="mx-3 group   hover:text-blue-400  transition-color duration-200">
                        <NavLink to="/about" className="border-2 rounded-3xl group-hover:border-blue-400 py-1 px-2" activeClassName='active'>About</NavLink>
                    </li>
                    <li className="mx-3 group   hover:text-blue-400  transition-color duration-200">
                        <NavLink to="/projects" className="border-2 rounded-3xl group-hover:border-blue-400 py-1 px-2" activeClassName='active'>Projects</NavLink>
                    </li>
                    <li className="mx-3 group   hover:text-blue-400  transition-color duration-200">
                        <NavLink to="/contact" className="border-2 rounded-3xl group-hover:border-blue-400 py-1 px-2" activeClassName='active'>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
