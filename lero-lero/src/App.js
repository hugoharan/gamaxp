import React, {Component} from 'react';
import './App.css';
import dilma from './assets/img/mamae-dilma.png';
import json from './frases.json';

import Frases from './Frases';
import Botao from './Botao';



class App extends Component {
state = {
  frase: '',
  autor: ''
}

componentDidMount= () =>{
  this.onButtonClick();
}

onButtonClick = () =>{
  let item = json[Math.floor(Math.random()*json.length)];
  let frase = item.frase;
  let autor = item.autor;
  
  this.setState({frase, autor})
}

render () {

    return (
      <div className="App" >
        <img src={dilma} alt="Mamãe Dilma"/>
        <Frases frase={this.state.frase} autor={this.state.autor} />
        <Botao onButtonClick = {this.onButtonClick}/>
      </div>
    );
}
}

export default App;
