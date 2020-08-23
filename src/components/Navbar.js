import React from 'react'
import '../styles/Navbar.css'

function Navbar(props) {
    return (
        <div id="navbar">
            <span id="nav-title">The most popular songs on Deezer</span>
            <span className="nav-modes">
                <button className="nav-button" onClick={props.showIcons}>Icons mode</button>
                <button className="nav-button" onClick={props.showList}>List mode</button>
            </span>
        </div>
    )
}

export default Navbar;