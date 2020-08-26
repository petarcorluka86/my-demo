import React, {useContext} from 'react'
import {context} from '../Context'
import '../styles/Navbar.css'

export default function Navbar() {
    const {show, actions} = useContext(context);
    return (
        <div id="navbar">
            <span id="nav-title">TOP POP</span>
            <span className="nav-modes">
                <button className="nav-button" onClick={()=>{
                    if (show.icons === true) actions.changeView('list');
                    else actions.changeView('icons'); 
                }}>Change view</button>
            </span>
            <span className="select-form">Sort by:
                <select className="select" onChange={(event) => actions.handleSort(event.target.value)}>
                    <option className="select" value="posASC">Position ASC</option>
                    <option className="select" value="posDESC">Position DESC</option>
                    <option className="select" value="durASC">Duration ASC</option>
                    <option className="select" value="durDESC">Duration DESC</option>
                </select>
            </span>
        </div>
    );
}