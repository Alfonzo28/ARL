import React, { Component } from 'react';
import './App.scss';
import Routes from './routes/Routes';

class App extends Component {
	getRoutes() {
		const routes = [];
		routes.push(<Routes key={'routes'}/>);
		return routes;
	}

	render() {
		return (
			<div className="App">			
				{this.getRoutes()}
			</div>
		);
	}
}

export default App;
