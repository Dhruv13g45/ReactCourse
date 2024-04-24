import React from 'react'
import { NavLink } from "react-router-dom"


const Navbar = () => {
    return (
        <>
            <nav className='border-b-2 p-5 text-black flex justify-evenly m-5 font-bold'>
                <NavLink to="/" className={({ isActive }) => ` hover:underline ${isActive ? "text-cyan-900" : "text-black"}`}>Home</NavLink>
                <NavLink to="about" className={({ isActive }) => ` hover:underline ${isActive ? "text-cyan-900" : "text-black"}`}>About</NavLink>
                <NavLink to="contact" className={({ isActive }) => ` hover:underline ${isActive ? "text-cyan-900" : "text-black"}`}>Contact</NavLink>
            </nav>
        </>
    )
}

export default Navbar
