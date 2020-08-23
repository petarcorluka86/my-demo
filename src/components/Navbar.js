import React from 'react'
import '../styles/Navbar.css'

function Navbar(props) {
    return (
        <div id="navbar">
            <span id="nav-title">TOP POP</span>
            <span className="nav-modes">
                <button className="nav-button" onClick={props.showIcons}>Icons mode</button>
                <button className="nav-button" onClick={props.showList}>List mode</button>
            </span>
            <span className="select-form">Sort by:
                <select className="select" onChange={props.handleSort}>
                    <option className="select" value="posASC">Position ASC</option>
                    <option className="select" value="posDESC">Position DESC</option>
                    <option className="select" value="durASC">Duration ASC</option>
                    <option className="select" value="durDESC">Duration DESC</option>
                </select>
            </span>
        </div>
    )
}

export default Navbar;