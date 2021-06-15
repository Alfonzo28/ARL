import React, { Component } from 'react';
import './Bio.scss';
import Platforms from '../../assets/platforms-gold-icons.svg';

export default class Bio extends Component {
	render() {
		const preHeader = 'Welcome to the world of';
		const firstName = 'Alfonzo';
		const secondName = 'Louw';
		const postHeader = 'UX/UI & Multimedia designer';
		const bioParagraph1 = `
		Qualified I.T. and Multimedia Designer with a demonstrated history of working in the broadcast media industry. Skilled in Customer Service, Research, User Experience (UX), Interaction Design (IXD) and front end development. Strong arts and design professional with a Bachelor's degree focused on Multimedia design from the University of Johannesburg.
        `;

		const bioParagraph2 = `
            Lorem ipsum dolor amet consectetur
            adipiscing elit sed eiusmod tempor
            incididunt ut labore.Lorem ipsum dolor amet consectetur
            adipiscing elit sed eiusmod tempor
            incididunt ut labore.Lorem ipsum dolor amet consectetur
            adipiscing elit sed eiusmod tempor
            incididunt ut labore.
        `;

		return (
			<div className="bio">
				<div className="pre-header">{preHeader}</div>
				<div className="name">{firstName}</div>
				<div className="name">{secondName}</div>
				<div className="post-header">{postHeader}</div>
				<div className="my-bio">{bioParagraph1}</div>
				<div className="my-bio">{bioParagraph2}</div>
				<img className="platforms" src={Platforms} alt="Platforms"/>
			</div>
		);
	}
}
