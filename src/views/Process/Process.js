import React, { Component } from 'react';
import './Process.scss';

export default class Process extends Component {	
	renderProcess(processSection, index) {
		return (
			<div className="section-container"
				key={index}
			>
				<div className="process-title">{processSection?.title}</div>
				<div className="process-body">{processSection?.body}</div>
				<hr className="section-line"></hr>
			</div>
		);
	}

	generateProcess(processSections) {
		if (processSections?.length > 0) {
			return processSections.map((processSection, index) => this.renderProcess(processSection, index));
		}
	}

	render() {
		const preHeader = 'My';
		const postHeader = 'Process';
		const processSections = [
			{
				title: 'Design',
				body: 'Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.'
			},
			{
				title: 'Design',
				body: 'Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.'
			},
			{
				title: 'Design',
				body: 'Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.'
			}
		];

		return (
			<div className="process">
				<div className="process-header-div">
					<div className="pre-header">{preHeader}</div>
					<div className="header-end">{postHeader}</div>
				</div>
				<div className="process-body">
					{this.generateProcess(processSections)}
				</div>
			</div>
		);
	}
}
