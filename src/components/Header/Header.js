import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HOME_URL, UX_UI_PROJECTS_URL } from '../../constants/urlConstants';
import './Header.scss';
import { HOME, UX_UI_PROJECTS, TESTIMONIES, CONTACT_ME, SCROLL_ELEMENT } from '../../constants/headerConstants';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	renderHeaderButton(headerButton) {
		return (
			<div 
				key={headerButton}
				className="header-text header-button"
				onClick={() => this.handleClick(headerButton)}
			>
				<div className="header-item-text">{headerButton}</div>
				<div className="header-underline">
				</div>
			</div>
		);
	}

	renderHeaderButtons() {
		const headerButtons = [
			HOME,
			UX_UI_PROJECTS,
			TESTIMONIES,
		];
		return (
			headerButtons.map(headerButton=>this.renderHeaderButton(headerButton))
		);
	}

	handleClick(headerButton) {
		switch (headerButton) {
		case HOME: {
			this.props.history.push(HOME_URL);
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});		
			break;
		}
		case UX_UI_PROJECTS: {
			this.props.history.push(UX_UI_PROJECTS_URL);
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});						
			break;
		}
		case TESTIMONIES: {
			this.props.history.push(HOME_URL);
			const page = document.getElementById(SCROLL_ELEMENT);
			const pageHeight = page.scrollHeight;
			window.scrollTo({
				top: pageHeight * 0.4,
				left: 0,
				behavior: 'smooth'
			});			
			break;
		}
		case CONTACT_ME: {
			this.props.history.push(HOME_URL);
			const page = document.getElementById(SCROLL_ELEMENT);
			const pageHeight = page.scrollHeight;
			window.scrollTo({
				top: pageHeight * 0.9,
				left: 0,
				behavior: 'smooth'
			});	
			break;
		}
		}
	}

	render() {        
		return (
			<div className="header">
				<div className="header-text header-title" onClick={() => this.handleClick(HOME)}>{'ARL'}</div>
				<div className="f-1"/>
				{this.renderHeaderButtons()}
				
				<button
					className="contact-button"
					onClick={() => this.handleClick(CONTACT_ME)}
				>
					{CONTACT_ME}
				</button>
			</div>
		);
	}
}

Header.propTypes = {
	history: PropTypes.array,
};

export default (withRouter(Header));