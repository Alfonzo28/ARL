import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

export default class Card extends Component {
	render() {
		const {cardHeader} = this.props;

		return (
			<div className="card">
				<div className="card-header">{cardHeader}</div>
			</div>
		);
	}
}

Card.propTypes = {
	cardBody: PropTypes.string,
	cardHeader: PropTypes.string,
};
