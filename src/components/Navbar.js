import React from 'react'
import '../styles/Navbar.css'

function Navbar(props) {
    return (
        <div id="navbar">
            <span id="nav-title">TOP POP</span>
            <span className="nav-modes">
                <button className="nav-button" onClick={()=>{
                    if (props.show.icons === true) {
                        props.showList()
                    }
                    else {
                        props.showIcons()
                    }
                }}>Change view</button>
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