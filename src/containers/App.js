import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import IconsMode from '../components/IconsMode';
import ListMode from '../components/ListMode';
import Footer from '../components/Footer';
import * as actions from '../actions';
import './App.css';

export default function App() {
    const songs = useSelector(state => state.songs);
    const show = useSelector(state => state.show);
    
    useEffect(() => { actions.songs.getSongs().then(response => actions.songs.initSongs(response)) },[]);
    useEffect(() => {if(songs.length > 0 && show.loading) actions.view.showList()},[songs, show.loading]);

    return(
      <div>
        <Navbar />
        <div className="nav-escape">
          {show.loading && <Loading />}
          {show.icons && <IconsMode />}
          {show.list && <ListMode />}
        </div>
        <Footer />
      </div>
    )
}