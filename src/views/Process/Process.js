import React, { Component } from 'react';
import './Process.scss';

export default class Process extends Component {	
	renderProcess(processSection, index) {
		return (
			<div className="section-container"
				key={index}
			>
			<div className="process-title-container">
				<div className="process-title-index">0{index+1} - </div>
				<div className="process-title">{processSection?.title}</div>
			</div>
				<div className="process-list-body">
					<div className="process-body">
						{this.generateList(processSection?.body)}
					</div>
					<hr className="section-line"></hr>
				</div>
			</div>
		);
	}

	generateProcess(processSections) {
		if (processSections?.length > 0) {
			return processSections.map((processSection, index) => this.renderProcess(processSection, index));
		}
	}

	generateList(list) {
		if (list?.length > 0) {
			return list.map((bodyItem, index) => {
				return(
					<li key={index}>{bodyItem}</li>
				);
			});
		}
	}

	render() {
		const preHeader = 'My';
		const postHeader = 'Process';
		const processSections = [
			{
				title: 'EMPATHIZE',
				body: ['Interviews', 'Shadowing', 'Seek to understand', 'Non-judmental']
			},
			{
				title: 'DEFINE',
				body: ['Personas', 'Role objectives', 'Decisions', 'Challenges', 'Pain points']
			},
			{
				title: 'IDEATE',
				body: ['Share ideas', 'All ideas worthy', ' Diverge/Converge', '\'\'Yes and\'\' thinking', 'Prioritise']
			},
			{
				title: 'PROTOTYPE',
				body: ['Mockups', 'Storyboards', 'Keep it simple', 'Fall fast', 'Iterate quickly']
			},
			{
				title: 'TEST',
				body: ['Understand impediments', ' What works?', 'Role play', 'Iterate quickly']
			},
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
