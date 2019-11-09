import React, {Component} from 'react';

class Usuario extends Component {
	render(){
		const {
			avatar_url,
			user,
			name,
			blog
		} = this.props.info;

		if(this.props.loading)
			return("<div>carregando</div>");
		return(
			<div>
			 <img src={`${this.props.info.avatar_url}`} alt="avatar"/>
			 <ul>
			 	<li>Usuario: {user}</li>
			 	<li>Nome: {name}</li>
			 	<li>Blog: {blog}</li>
			 	<li></li>
			 </ul>
			</div>
		)
	}
}

export default Usuario;