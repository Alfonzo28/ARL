import React, { Component } from 'react';
import {
	Bio,
	ProfilePic,
	About,
	Process,
	Testimonies,
	Links,
	Contact
} from '../../views';
import './Home.scss';
import Routes from '../../routes/Routes';
import Header from '../../components/Header/Header';
import Dots from '../../assets/Dots.svg';

export default class Home extends Component {	
	getRoutes() {
		const routes = [];
		routes.push(<Routes key={'routes'}/>);
		return routes;
	}

	renderDots() {
		return(
			<img className="projects-dots" src={Dots} alt="dots"/>
		);
	}

	render() {
		return (
			<div className="App">			
				<Header/>
				<div className="body">
					<Bio/>
					<ProfilePic/>
					<About/>
					<Process/>
				</div>
				<div className="single-column-body">
					<Testimonies/>
				</div>
				<div>
					{this.renderDots()}
				</div>
				<Links/>
				<div className="projects-ellipse-dot-float-right">
					{this.renderDots()}
				</div>
				<Contact/>
				<div className="projects-ellipse-dot-float-right">
					{this.renderDots()}
				</div>
			</div>
		);
	}
}
