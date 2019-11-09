import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Entrada from './Entrada';
import Usuario from './Usuario';


class App extends Component {
state = {
  usuario: '',
  info: {
    avatar_url: null,
    user: null,
    name: null,
    blog: null
  },
  erro: false,
  loading: false
}

onInputChange = (event) =>{
  this.setState({
    usuario: event.target.value
  })
}

onButtonClick = () =>{
  this.setState({loading:true});
  const {usuario} = this.state;
  debugger;
  fetch(`https://api.github.com/users/${usuario}`)
  .then(data => data.json())
  .then(info =>{
    debugger;
    this.setState({info, loading:false})
  })
  .catch(erro => {
    this.setState({
      erro:true,
      loading:false
    })
  })
}

buildBlocoUsuario = () => {
  if(this.state.erro) return "Ooooops, deu erro";
  if(this.state.loading) return "Carregando...";
  if(this.state.info) return <Usuario info={this.state.info}/>
  return <div>...</div>
}

render () {
  const blocoUsuario = this.buildBlocoUsuario();

    return (
      <div className="App">
        <Entrada 
          valor={this.props.usuario}
          onInputChange ={this.onInputChange}
          onButtonClick = {this.onButtonClick}
         />
        <Usuario info={this.state.info} loading={this.state.loading} />
      </div>
    );
}
}

export default App;
