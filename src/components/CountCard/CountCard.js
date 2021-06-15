import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CountCard.scss';

export default class CardCount extends Component {
	render() {
		const {cardHeader, cardBody} = this.props;

		return (
			<div className="count-card">
				<div className="count-card-header">{cardHeader}</div>
				<div className="count-card-body">{cardBody}</div>
			</div>
		);
	}
}

CardCount.propTypes = {
	cardBody: PropTypes.string,
	cardHeader: PropTypes.string
};
