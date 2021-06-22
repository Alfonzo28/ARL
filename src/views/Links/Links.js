import React, { Component } from 'react';
import './Links.scss';
import Behance from '../../assets/Behance.svg';
import Vimeo from '../../assets/Vimeo.svg';
import PDF from '../../assets/PDF.svg';
import LinkedIn from '../../assets/LinkedIn.svg';
import ArrowUp from '../../assets/arrow_back.svg';

export default class Links extends Component {
	generateLinks(links) {
		if (links?.length > 0) {
			return links.map((link, index) => {
				return(
					<a className="link-container pointer" key={index} href={link?.link}>
						<img className="link" src={link?.image} alt={link?.imageAltText}/>
						<div className="link-card-title">{link?.linkCardTitle}</div>
						<div className="link-card-body">{link?.linkCardBody}</div>
					</a>
				);
			});
		}
	}

	render() {
		const links = [
			{
				image: Vimeo,
				imageAltText: 'Vimeo logo',
				linkCardTitle: 'Vimeo',
				linkCardBody: 'My compilation of 2D animations done at the SABC',
				link: 'https://vimeo.com/user73883179'
			},
			{
				image: Behance,
				imageAltText: 'ARL',
				linkCardTitle: 'Behance logo',
				linkCardBody: 'Varsity work and logo designs.'
			},
			{
				image: LinkedIn,
				imageAltText: 'LinkedIn logo',
				linkCardTitle: 'LinkedIn',
				linkCardBody: 'LinkedIn profile with IDF certifications',
				link: 'https://www.linkedin.com/in/alfonzo-louw-345a9716b'
			},
			{
				image: PDF,
				imageAltText: 'PDF logo',
				linkCardTitle: 'My CV',
				linkCardBody: 'PDF Download'
			}
			
		];

		return (
			<div className="link-cards-container">
			<div className="scroll-up-button" onClick={() => window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			})}>
				<img className="arrow-up" src={ArrowUp} alt="arrow up"/>
			</div>
				<div className="link-list-container">
					{this.generateLinks(links)}
				</div>
			</div>
		);
	}
}
