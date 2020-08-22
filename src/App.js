import React, {Component} from 'react'
import ApiService from './ApiService'
import Navbar from './components/Navbar'
import Loading from './components/Loading'
import IconsMode from './components/IconsMode'
import ListMode from './components/ListMode'
import Footer from './components/Footer'

const api = new ApiService()

class App extends Component {

  state = {
    songs: [],
    show: {
      loading: true,
      icons: false,
      list: false
    }
  }

  componentDidMount(){
    api.getSongs().then(response => this.setState({
      songs: response, 
      show:{
        loading: false, 
        icons: true,
        list: false
      }
    }));
  }

  showIcons = () => this.setState({show:{ loading: false, icons: true, list: false}});

  showList = () => this.setState({show:{ loading: false, icons: false, list: true}});
  
  render(){
    return(
      <div>
        <Navbar showIcons={this.showIcons} showList={this.showList} />
        <div className="nav-escape">
          {this.state.show.loading && <Loading />}
          {this.state.show.icons && <IconsMode songs={this.state.songs} />}
          {this.state.show.list && <ListMode songs={this.state.songs} />}
          <Footer />
        </div>
      </div>
    )
  }
}

export default App