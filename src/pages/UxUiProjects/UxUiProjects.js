import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './UxUiProjects.scss';
import { caseStudy } from './projects';
import Ellipse from '../../assets/Ellipse.svg';
import Dots from '../../assets/Dots.svg';
import Header from '../../components/Header/Header';
import CardCount from '../../components/CountCard/CountCard';
import Uj from '../../assets/uj.svg';
import Sabc from '../../assets/sabc.svg';
import SabcNews from '../../assets/sabc-news.svg';
import Capitec from '../../assets/capitec.svg';
import Absa from '../../assets/absa.svg';
import Huawei from '../../assets/huawei.svg';
import CoatOfArms from '../../assets/coat-of-arms.svg';
import { PROJECT_URL } from '../../constants/urlConstants';

class UxUiProjects extends Component {	
	renderEllipse() {
		return(
			<img className="projects-ellipse" src={Ellipse} alt="ellipse"/>
		);
	}

	renderDots() {
		return(
			<img className="projects-dots" src={Dots} alt="dots"/>
		);
	}

	renderCountCard(countCard, index) {
		return(
			<CardCount 
				key={index}
				cardHeader={countCard?.header}
				cardBody={countCard?.body}
			/>
		);
	}

	generateCountCards(countCards) {
		if (countCards?.length > 0) {
			return countCards.map((countCard, index) => this.renderCountCard(countCard, index));
		}
	}	

	renderCards(projectCard, index) {
		return (
			<div className="project-card" key={index}>
				<img className="project-card-image" src={projectCard?.image} alt="project-card-image"/>				
				<div className="project-card-content">
					<div className="project-card-title">{projectCard?.title}</div>
					<div className="project-card-button" onClick={() => this.props.history.push(PROJECT_URL + '/' + index)}>VIEW CASE STUDY</div>
				</div>
			</div>
		);
	}

	generateProjects(projectCards) {
		if (projectCards?.length > 0) {
			return projectCards.map((projectCard, index) => this.renderCards(projectCard, index, projectCards?.length));
		}
	}

	generateBrandsWorkedFor(brandsWorkedFor) {
		if (brandsWorkedFor?.length > 0) {
			return brandsWorkedFor.map((brandWorkedFor, index) => {
				return(
					<img className="brand" src={brandWorkedFor} alt="brand" key={index}/>
				);
			});
		}
	}

	render() {
		const brandsTitle = 'Some brands I had the pleasure of working for';		
		const countCards = [
			{
				header: '50',
				body: 'Projects'
			},
			{
				header: '50+',
				body: 'Happy Clients'
			},
			{
				header: '60',
				body: 'Animations'
			},
			{
				header: '100',
				body: 'Illustrations'
			}
		];
		const brandsWorkedFor = [Huawei, Absa, Capitec, SabcNews, Sabc, Uj, 'https://firebasestorage.googleapis.com/v0/b/arl-portfolio.appspot.com/o/coat-of-arms.svg?alt=media&token=bbbe5a92-30d2-45a9-a705-1e0110bb528a'];

		return (
			<div className="App">			
				<Header/>
				<div className="ux-ui-projects-body">						
					{this.generateProjects(caseStudy)}
				</div>
				<div>
					{this.renderDots()}
				</div>
				<div className="count-cards-container">
					{this.generateCountCards(countCards)}
				</div>
				<div className="brands-container">
					<div className="brand-list-title">{brandsTitle}</div>
					<div className="brand-list-container">
						{this.generateBrandsWorkedFor(brandsWorkedFor)}
					</div>
				</div>
			</div>
		);
	}
}

UxUiProjects.propTypes = {
	history: PropTypes.object,
};

export default (withRouter(UxUiProjects));