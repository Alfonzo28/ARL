import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import './About.scss';

export default class About extends Component {	
	renderCards(aboutCard, index) {
		return (
			<Card
				key={index}
				cardHeader={aboutCard?.title}
				cardBody={aboutCard?.body}
			/>
		);
	}

	generateAbout(aboutCards, remainder) {
		if (aboutCards?.length > 0) {
			return aboutCards.map((aboutCard, index) => {
				if (index % 2 === remainder)
					return this.renderCards(aboutCard, index);
			});
		}
	}

	render() {
		const preHeader = 'What I’m ';
		const postHeader = 'all about';
		const aboutCards = [
			{
				title: 'UX / UI DESIGN',
				body: 'Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.'
			},
			{
				title: 'FRONT-END DEVELOPMENT',
				body: 'Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.'
			},
			{
				title: 'GRAPHIC DESIGN',
				body: 'Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.'
			},
			{
				title: 'VIDEO EDITING',
				body: 'Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.'
			}
		];

		return (
			<div className="about">
				<div className="header-div">
					<div className="pre-header">{preHeader}</div>
					<div className="header-end">{postHeader}</div>
				</div>
				<div className="grid-container">
					<div className="left-column">{this.generateAbout(aboutCards, 0)}</div>
					<div className="right-column">{this.generateAbout(aboutCards, 1)}</div>
				</div>
			</div>
		);
	}
}
