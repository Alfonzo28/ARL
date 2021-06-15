import React, { Component } from 'react';
import './Project.scss';
import ARLProfilePic from '../../assets/arl-profile-pic.png';
import Header from '../../components/Header/Header';
import { projects } from '../UxUiProjects/projects';

export default class Project extends Component {		
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

	generateWorkItem(workItems) {
		if (workItems?.length > 0) {
			return workItems.map((workItem, index) => {
				return(					
					<div className="work-item" key={index}>
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
					<img src={image} alt="persona-image" key={index}/>
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
					<img className="project-image" src={ARLProfilePic} alt="project-image"/>
					<div className="the-story-container">
						<div className="the-story-title">{'The Story'}</div>
						<div className="the-story-decription">{projectsContent?.storyDecription}</div>
					</div>
					<div className="project-body-content">
						{this.generateBodyContent(projectsContent?.body)}
					</div>

					<div className="the-story-container">
						<div className="the-story-title">{'Who it’s for'}</div>
						
						<div className="the-story-decription">
							<ul>
								{this.whoIsItForBody(projectsContent?.whoIsItFor)}
							</ul>  
						</div>
					</div>

					<div className="the-story-container">
						<div className="the-story-title">{'Journey Map'}</div>
						<div className="the-story-decription">{'Journey map showing the route taken by businesses and applicants before, during and after the application process.'}</div>
						<img className="journey-map" src={projectsContent?.journeyMap} alt="journey-map"/>
					</div>

					<div className="personas-wireframes">
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
						<div className="the-story-container">
							<div className="the-story-title">{'Wireframes'}</div>
							<div className="the-story-decription">{'I made use of High-fidelity wireframes for testing purposes.'}</div>
							<img className="wireframes" src={projectsContent?.wireframes} alt="wireframes"/>
						</div>
					</div>

					<div className="the-story-container">
						<div className="the-story-title">{'Design Comps'}</div>
						<div className="the-story-decription">{'The final design comps after a few iterations and testing.'}</div>
						
						<div className="images">
							{this.generateImages(projectsContent?.designCompsImages)}
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
					</div>

					<div className="see-more-work-container">
						<div className="see-more-work-title">{'SEE MORE OF MY WORK:'}</div>
						<div className="see-more-work">
							{this.generateWorkItem(projectsContent?.workItems)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
