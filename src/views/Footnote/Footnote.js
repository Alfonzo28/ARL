import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Footnote.scss';
import { HOME, TESTIMONIES, UX_UI_PROJECTS, SCROLL_ELEMENT } from '../../constants/headerConstants';
import { HOME_URL, UX_UI_PROJECTS_URL } from '../../constants/urlConstants';

class Footnote extends Component {
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
		}
	}

	render() {
		return (
			<div className="footnote-container">
				<div className="footnote-list-item" onClick={() => this.handleClick(HOME)}>
					{HOME}
				</div>
				<div className="footnote-list-item" onClick={() => this.handleClick(UX_UI_PROJECTS)}>
					{UX_UI_PROJECTS}
				</div>
				<div className="footnote-list-item" onClick={() => this.handleClick(TESTIMONIES)}>
					{TESTIMONIES}
				</div> 
				<div className="footnote-end">
					Privacy policy &nbsp;&nbsp;&nbsp; @2021 ARL. All rights reserved
				</div> 
			</div>
		);
	}
}

Footnote.propTypes = {
	history: PropTypes.array,
};

export default (withRouter(Footnote));