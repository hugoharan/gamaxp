import React, {Component} from 'react';
import './App.css';
import logo from './assets/img/logo.png';

import Menu from './Menu';
import ListMovies from './ListMovies';



class App extends Component {
state = {
  category: ''
}

render () {

    return (
      <div className="App" >
        <Menu />
        <ListMovies category="upcoming" />
        <ListMovies category="popular" />
        <ListMovies category="top_rated" />
        <ListMovies category="now_playing" />
      </div>
    );
}
}

export default App;
