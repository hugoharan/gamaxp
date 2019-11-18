import React, {Component} from 'react';
import './App.css';

class ListMovies extends Component {
	state = {
		list: [],
		title: '',
		desc: '',
		img: ''
	}

	getMovies = () => {
		    fetch(`https://api.themoviedb.org/3/movie/${this.props.category}?api_key=e5693481ef000bfdd855a0f21ad39631&language=en-US`)
		    .then(response => response.json())
		    .then(a => {
		        this.setState({list:a.results});		     
		    }).catch(function (err){
		      	console.warn('Erro ao recuperar dados da API', err);
		    });
	}

	componentDidMount = () => {
		this.getMovies()
	}


	render(){
		debugger;
		return(
			<div className="Upcoming">
				{this.state.list.map((item) =>{

					const base_url = "https://image.tmdb.org/t/p/w500";
	      		 
					return(
						<div className="card">
							<img src={base_url+item.backdrop_path}/>
							<h1>{item.original_title}</h1>
							<h2>{item.overview}</h2>
						</div>
					)
				})}

			</div>
		)
	}
}

export default ListMovies;