import React, {useContext} from 'react'
import {context} from '../Context'
import Navbar from './Navbar'
import Loading from './Loading'
import IconsMode from './IconsMode'
import ListMode from './ListMode'
import Footer from './Footer'

export default function App() {
    const {show} = useContext(context);
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