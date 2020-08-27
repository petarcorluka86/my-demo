import React from 'react';
import { useSelector } from 'react-redux';
import * as actions from '../actions';
import * as types from '../actions/actionTypes';
import './Navbar.css';

export default function Navbar() {
    const show = useSelector(state => state.show);
    return (
        <div id="navbar">
            <span id="nav-title">TOP POP</span>
            <span className="nav-modes">
                <button className="nav-button" onClick={()=> show.icons ? actions.view.showList() : actions.view.showIcons()}>
                    Change view
                </button>
            </span>
            <span className="select-form">Sort by:
                <select className="select" onChange={(event) => actions.songs.sortSongs(event.target.value)}>
                    <option className="select" value={types.SORT_BY_POSITION_ASC}>Position ASC</option>
                    <option className="select" value={types.SORT_BY_POSITION_DESC}>Position DESC</option>
                    <option className="select" value={types.SORT_BY_DURATION_ASC}>Duration ASC</option>
                    <option className="select" value={types.SORT_BY_DURATION_DESC}>Duration DESC</option>
                </select>
            </span>
        </div>
    );
}