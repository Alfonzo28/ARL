import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Project.scss';
import ARLProfilePic from '../../assets/arl-profile-pic.png';
import ArrowUp from '../../assets/arrow_back.svg';
import Header from '../../components/Header/Header';
import { projects } from '../UxUiProjects/projects';
import { PROJECT_URL } from '../../constants/urlConstants';

class Project extends Component {		
	generateProjects(projectCards) {
		if (projectCards?.length > 0) {
			return projectCards.map((projectCard, index) => this.renderCards(projectCard, index, projectCards?.length));
		}
	}

	generateBodyContent(body) {
		if (body?.length > 0) {
			return body.map((bodyItem, index) => {
				return(
					<div className="body-section" key={index}>
						<div className="body-section-label">
							{bodyItem?.title}
						</div>
						<div className="body-section-content">
							{bodyItem?.description}
						</div>
						<ul className="solving-problem-list"> 
								{this.whoIsItForBody(bodyItem?.bodylist)}
							</ul>  
					</div>
				);
			});
		}
	}

	whoIsItForBody(whoIsItFor) {
		if (whoIsItFor?.length > 0) {
			return whoIsItFor.map((bodyItem, index) => {
				return(
					<li key={index}>{bodyItem}</li>
				);
			});
		}
	}

	handleClick(index) {
		this.props.history.push(PROJECT_URL + '/' + index);
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});	
	}

	generateWorkItem(workItems) {
		if (workItems?.length > 0) {
			return workItems.map((workItem, index) => {
				return(					
					<div onClick={() => this.handleClick(index)} className="work-item" key={index}>
						<img className="work-item-image" src={workItem?.image} alt="project-image"/>
						<div className="work-item-title">
							{workItem?.title}
						</div>
					</div>
				);
			});
		}
	}

	generateImages(images) {
		if (images?.length > 0) {
			return images.map((image, index) => {
				return(					
					<img className="persona-image" src={image} alt="persona-image" key={index}/>
				);
			});
		}
	}

	generateDesignCompsImages(images) {
		if (images?.length > 0) {
			return images.map((image, index) => {
				return(					
					<img className="design-comps-image" src={image} alt="persona-image" key={index}/>
				);
			});
		}
	}

	render() {
		const splitUrl = window.location.href.split('/');
		const projectIndex = splitUrl?.[splitUrl?.length - 1];
		const projectsContent = projects?.[projectIndex];
		
		return (
			<div className="App">			
				<Header/>
				<div className="project-container">
					<img className="project-image" src={projectsContent?.image} alt="project-image"/>
					<div className="the-story-container">
						<div className="the-story-title">{'About the project'}</div>
						<div className="the-story-decription">{projectsContent?.storyDecription}</div>
					</div>
					<div className="project-body-content">
						{this.generateBodyContent(projectsContent?.body)}
					</div>

					<div className="the-story-container">
						<div className="the-story-title">{'Tool\'s used'}</div>
						
						<div className="the-story-decription">
							<ul>
								{this.whoIsItForBody(projectsContent?.whoIsItFor)}
							</ul>  
						</div>
					</div>

					{ projectsContent?.journeyMap && 
						<div className="the-story-container"> 
						<div className="the-story-title">{'Journey Map'}</div>
						<div className="the-story-decription">{'Journey map showing the route taken by businesses and applicants before, during and after the application process.'}</div>
						<img className="journey-map" src={projectsContent?.journeyMap} alt="journey-map"/>
					</div>
					}

					<div className="personas-wireframes">
					{ projectsContent?.personaImages && 
						<div className="the-story-container">
							<div className="the-story-title">{'Personas'}</div>
							<div className="the-story-decription">{'Here we have personas for businesses and applicants'}</div>

							<div className="the-story-decription">
								<ul>
									{this.whoIsItForBody(projectsContent?.personas)}
								</ul>  
							</div>

							<div className="images">
								{this.generateImages(projectsContent?.personaImages)}
							</div>
						</div>
						
						}

						{ projectsContent?.wireframes && 
						<div className="the-story-container">
							<div className="the-story-title">{'Wireframes'}</div>
							<div className="the-story-decription">{'I made use of High-fidelity wireframes for testing purposes.'}</div>
							<img className="wireframes" src={projectsContent?.wireframes} alt="wireframes"/>
						</div>
	}
					</div>

					<div className="the-story-container">
						<div className="the-story-title">{'Design Comps'}</div>
						<div className="the-story-decription">{'The final design comps after a few iterations and testing.'}</div>
						
						<div className="design-comps-images">
							{this.generateDesignCompsImages(projectsContent?.designCompsImages)}
						</div>
					</div>

					<div className="the-story-container">
						<div className="the-story-title">{'Challenges of the project'}</div>
						<div className="the-story-decription">{projectsContent?.challenges}</div>

						<div className="body-section-label">{'What I\'ve learned'}</div>
						<div className="the-story-decription">
							<ul>
								{this.whoIsItForBody(projectsContent?.whatIveLearned)}
							</ul>  
						</div>

						<div className="body-section-label">{'What I\'ve accomplished'}</div>
						<div className="the-story-decription">{projectsContent?.whatIveAccomplished}</div>
						<div className="scroll-up-button" onClick={() => window.scrollTo({
							top: 0,
							left: 0,
							behavior: 'smooth'
						})}>
							<img className="arrow-up" src={ArrowUp} alt="arrow up"/>
						</div>
					</div>

					<div className="see-more-work-container">
						<div className="see-more-work-title">{'SEE MORE OF MY WORK:'}</div>
						<div className="see-more-work">
							{this.generateWorkItem(projects)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Project.propTypes = {
	history: PropTypes.object,
};

export default (withRouter(Project));