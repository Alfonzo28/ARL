import React, { Component } from 'react';
import QuoteBox from '../../components/QuoteBox/QuoteBox';
import './Testimonies.scss';
import ARLProfilePic from '../../assets/arl-profile-pic.png';
import Ellipse from '../../assets/Ellipse.svg';
import Dots from '../../assets/Dots.svg';

export default class Testimonies extends Component {	
	renderEllipse() {
		return(
			<img className="ellipse" src={Ellipse} alt="ellipse"/>
		);
	}

	renderDots() {
		return(
			<img className="dots" src={Dots} alt="dots"/>
		);
	}

	renderCards(testimonyCard, index, testimonyCardsLength) {
		return (
			<div>
				<div className="ellipse-dot-quote-container">
					<div className="ellipse-container">
						{index % 2 === 0 && this.renderEllipse()}
					</div>
					<div>
						{index  % 2 === 0 && this.renderDots()}
					</div>
				</div>
				<QuoteBox
					key={index}
					index={index}
					cardPreHeader={testimonyCard?.pretitle}
					cardHeaderEnd={testimonyCard?.titleEnd}
					cardBody={testimonyCard?.body}
					cardImage={testimonyCard?.image}
				/>
				<div className="ellipse-dot-quote-container-end">
					<div>
						{index === testimonyCardsLength - 1 && this.renderDots()}
					</div>
					<div>
						{index % 2 === 1 && this.renderEllipse()}
					</div>
				</div>
			</div>
		);
	}

	generateTestimonies(testimonyCards) {
		if (testimonyCards?.length > 0) {
			return testimonyCards.map((testimonyCard, index) => this.renderCards(testimonyCard, index, testimonyCards?.length));
		}
	}

	render() {
		const header = 'Testimonies';
		const testimonyCards = [
			{
				pretitle: 'UX / UI DESIGN',
				titleEnd: '/CEO at Google inc',
				body: 'Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.',
				image: ARLProfilePic
			},
			{
				pretitle: 'FRONT-END DEVELOPMENT',
				titleEnd: '/CEO at Google inc',
				body: 'Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.',
				image: ARLProfilePic
			},
			{
				pretitle: 'GRAPHIC DESIGN',
				titleEnd: '/CEO at Google inc',
				body: 'Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.',
				image: ARLProfilePic
			},
			{
				pretitle: 'VIDEO EDITING',
				titleEnd: '/CEO at Google inc',
				body: 'Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.',
				image: ARLProfilePic
			}
		];

		return (
			<div className="testimonies">
				<div className="concave-top-border"></div>
				<div className="testimonies-header">{header}</div>
				<div className="testimonies-container">{this.generateTestimonies(testimonyCards)}</div>
				<div className="concave-bottom-border"></div>
			</div>
		);
	}
}
