import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions';
import * as types from '../actions/actionTypes';
import styles from './Navbar.module.css';

export default function Navbar() {
    const dispatch = useDispatch();
    const localActions = {
        showIcons: () => dispatch(actions.view.changeView(types.SHOW_ICONS)),
        showList: () => dispatch(actions.view.changeView(types.SHOW_LIST)),
        sortSongs: (order) => dispatch(actions.songs.sortSongs(order))
    }
    const show = useSelector(state => state.show);
    return (
        <div id={styles.navbar}>
            <span id={styles.navTitle}>TOP POP</span>
            <span className={styles.navModes}>
                <button className={styles.navbutton} 
                onClick={()=> show.icons ? localActions.showList(): localActions.showIcons()}>
                    Change view
                </button>
            </span>
            <span className={styles.selectForm}>Sort by:
                <select className={styles.select} onChange={(event) => localActions.sortSongs(event.target.value)}>
                    <option className={styles.select} value={types.SORT_BY_POSITION_ASC}>Position ASC</option>
                    <option className={styles.select} value={types.SORT_BY_POSITION_DESC}>Position DESC</option>
                    <option className={styles.select} value={types.SORT_BY_DURATION_ASC}>Duration ASC</option>
                    <option className={styles.select} value={types.SORT_BY_DURATION_DESC}>Duration DESC</option>
                </select>
            </span>
        </div>
    );
}