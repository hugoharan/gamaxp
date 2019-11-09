import React, {Component} from 'react';
import './App.css';

class Frases extends Component {
	render(){

		return(
			<div className="frase">
				<p>"{this.props.frase}"</p>
				<span>- {this.props.autor}</span>
			</div>
		)
	}
}

export default Frases;