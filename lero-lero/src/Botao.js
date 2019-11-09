import React, {Component} from 'react';
import './App.css';

class Botao extends Component {
	render(){

		return(
			<div>
				
				<button onClick={this.props.onButtonClick}>Fala mamãe Dilma!</button>

			</div>
		)
	}
}

export default Botao;