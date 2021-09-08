import React, { Component } from 'react';
import './Bio.scss';
import Platforms from '../../assets/platforms-gold-icons.svg';

export default class Bio extends Component {
	render() {
		const preHeader = 'Hi, my name is';
		const firstName = 'Alfonzo Louw';
	
		const postHeader = 'UX/UI & Multimedia Designer';
		const bioParagraph1 = `
		Education: University of Johannesburg - Boston City Campus and Business College.
        `;

		const bioParagraph2 = `
		I am a qualified I.T. and Multimedia Designer 
		with a demonstrated history of working 
		in the broadcast media industry.
		Skilled in Customer Service, Research, 
		User Experience (UX), Interaction Design 
		(IxD), and front-end development. 
		Strong arts and design professional 
		with a Bachelor's degree focused on
		Multimedia design from
		The University of Johannesburg.
        `;

		return (
			<div className="bio">
				<div className="pre-header">{preHeader}</div>
				<div className="name">{firstName}</div>
				
				<div className="post-header">{postHeader}</div>
				<div className="my-bio">{bioParagraph1}</div>
				<div className="my-bio">{bioParagraph2}</div>
				<img className="platforms" src={Platforms} alt="Platforms"/>
			</div>
		);
	}
}
