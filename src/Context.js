import React, {useState, useEffect, useReducer, useCallback} from 'react';
import ApiService from './ApiService' //klasa koju koristim za komunikaciju s apijem
import songData from './songData' //hard kodirani json s pjesmama isti kao onaj koji se fetcha

export const context = React.createContext();

//instanca u kojoj mi se nalazi funkcij za fetchanje pjesama
const api = new ApiService();

//reducer funckcija za sortiranje u useReduceru
function reducer(state, action) {
    switch(action.type) {
        case 'durASC':
            return state.sort((a,b)=>(parseInt(a.duration)>parseInt(b.duration))?1:((parseInt(b.duration)>parseInt(a.duration))?-1:0));
        case 'durDESC':
            return state.sort((a,b)=>(parseInt(a.duration)>parseInt(b.duration))?1:((parseInt(b.duration)>parseInt(a.duration))?-1:0)).reverse();
        case 'posDESC':
            return state.sort((a,b)=>(parseInt(a.position)>parseInt(b.position))?1:((parseInt(b.position)>parseInt(a.position))?-1:0)).reverse();
        default:
            return state.sort((a,b)=>(parseInt(a.position)>parseInt(b.position))?1:((parseInt(b.position)>parseInt(a.position))?-1:0));
    }
};

//funkcijska komponenta koju koristim kao providera za zajedničke stateove i metode od navbara, listMode i iconsMode
// da bih izbjegao props drilling
export default function ContextProvider(props) {
    const [songs, dispatch] = useReducer(reducer,songData.tracks.data);
    // state koji odlucuje koja se komponenta rendera
    const [show, setShow] = useState({
        loading: true,
        icons: false,
        list: false
    });

    useEffect(fetchSongs,[]);

    function fetchSongs() {
        api.getSongs()
        .then(response => {
                //ovdje trebam response nekako postaviti kao pocetnu vrijednost za state songs, ali neznam kakao jer koristim useReducer
                //pa sam za pocetnu vrijdnost stavio hardkodirane pjseme koje sam gore importao iz songData.js
                setShow({
                    loading: false,
                    icons: false,
                    list: true
                });
            })
    };

    const updateSongs = useCallback(order => {
        dispatch({type: order}); 
        setShow({...show}); //nisam shvatio zašto mi dispatch ne rerendera page nakon updatea pa sam stavio setShow 
    },[show]);              //da aktivira render... volio bi da mi objasniš zašto mi useReducer neaktivira novi render kad updatea state

    const changeView = useCallback(view =>{
        if(view === 'icons') {
            setShow({loading: false, icons: true, list:false});
        }
        else {
            setShow({loading: false, icons: false, list:true});
        }
    },[]);

    return(
        <context.Provider value = {{
            songs: songs,
            show: show,
            actions:{
                changeView: changeView,
                handleSort: updateSongs                                                             
            }
        }}>
            {props.children}
        </context.Provider>
        );
}