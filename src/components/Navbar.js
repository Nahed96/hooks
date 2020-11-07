import React from 'react'
import './Navbar.css'
import Rate from './Rate'

const Navbar = ({setSearch}) => {
    return (
        <div >
        <div className="search">
            <input type="text" placeholder="movie name" onChange={(e)=>setSearch(e.target.value)}></input>
            <Rate/>
        </div>
        </div>
    )
}

export default Navbar
