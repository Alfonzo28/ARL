import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Project.scss';
import TripToLibrary from '../../assets/Library Visit.png';
import Sketch from '../../assets/Sketches.png';
import Persona from '../../assets/Persona.png';
import ArrowUp from '../../assets/arrow_back.svg';
import Header from '../../components/Header/Header';
import { projects } from '../UxUiProjects/projects';
import { PROJECT_URL } from '../../constants/urlConstants';
import WestburyBranding from '../../assets/Branding.png';
import WestburyColourPalette from '../../assets/Colour palette.png';

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
						<div className="the-story-title">{'Tool\s used'}</div>
						
						<div className="the-story-decription">
							<ul>
								{this.whoIsItForBody(projectsContent?.whoIsItFor)}
							</ul>  
						</div>
					</div>

					{projectsContent?.title === 'WESTBURY LIBRARY' && <div className="the-story-container">
						<div className="body-section-label">
						The Johannesburg City Library
						</div>
						<img className="westbury-images" src={TripToLibrary} alt="journey-map"/>
						
						<div className="the-story-title">{'Research design and Methodology'}</div>

						<div className="the-story-decription">
							I used the qualitative method to build a theory while using quantitative methods to support the theory. 
							So by asking in-depth, qualitative questions such as:
						</div>
						
						<div className="the-story-decription">
							<ul>
								{this.whoIsItForBody(['What are your experiences of the Westbury library, and how can a mobile application improve your experience as a user?'])}
							</ul>  
						</div>

						<div className="the-story-decription">
							Lastly, I surveyed the users with short focused quantitative questions-such as:
						</div>

						<div className="the-story-decription">
							<ul>
								{this.whoIsItForBody(['True or false, by having a points system where users\' can gain points for every book read or checked out, they can then redeem points to access the internet through their mobile app.'])}
							</ul>  
						</div>

						<div className="the-story-decription">
						By doing this, I statistically supported the qualitative insights and gained more information on what 
						the users' wants, needs, and frustrations were.
						</div>
						
						<div className="the-story-title">{'The process'}</div>

						<div className="the-story-decription">
							Once my questions were ready and interviews conducted, I compiled my finds into a Microsoft Excel
							document, which I categorized using affinity diagrams. The affinity diagrams showed my wicked
							problems based on my observations and the interviews conducted.
						</div>

						<div className="the-story-decription">
							I made use of the Firma model to understand the Westbury community as a whole, what their
							frustrations were, what contributed to those frustrations, and how a mobile application could assist 
							in the educational growth of the community.
						</div>
						
						<div className="the-story-decription">
						When the time came to empathize with my users. I made use of Physiological drivers to fully understand how my users felt, 
						what their wants and needs were, and how I can successfully design with them in mind.
						</div>

						<div className="the-story-title">{'Persona'}</div>

						<img className="westbury-images" src={Persona} alt="journey-map"/>

						<div className="the-story-title">{'Sketches'}</div>

						<div className="the-story-decription">
							Certain features from my sketching sessions remained in the final design -Due to positive feedback from user testing session
							and the different iteration phases.
						</div>

						<img className="westbury-images" src={Sketch} alt="journey-map"/>
					</div>
					}

					{ projectsContent?.journeyMap && 
						<div className="the-story-container"> 
						<div className="the-story-title">{'Journey Map'}</div>
						<div className="the-story-decription">{'Journey map showing the route taken by businesses and applicants before, during and after the application process.'}</div>
						<img className="journey-map" src={projectsContent?.journeyMap} alt="journey-map"/>
					</div>
					}

					{projectsContent?.title === 'WESTBURY LIBRARY' && 
						<div className="the-story-container">
							<div className="the-story-title">{'Wireframes'}</div>
							<div className="the-story-decription">{'I made use of High-fidelity wireframes for testing purposes.'}</div>
							<img className="westbury-images" src={projectsContent?.wireframes} alt="wireframes"/>
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

						{( projectsContent?.wireframes && projectsContent?.title !== 'WESTBURY LIBRARY' ) &&
						<div className="the-story-container">
							<div className="the-story-title">{'Wireframes'}</div>
							<div className="the-story-decription">{'I made use of High-fidelity wireframes for testing purposes.'}</div>
							<img className="wireframes" src={projectsContent?.wireframes} alt="wireframes"/>
						</div>
						}

						{projectsContent?.title === 'WESTBURY LIBRARY' && 
						<div className="the-story-container">
							<div className="the-story-title">{'Branding'}</div>
							<div className="the-story-decription">{'The branding for the mobile app consisted of the Westbury school crest with a reimagined and redesigned look.'}</div>
							<img className="westbury-images" src={WestburyBranding} alt="wireframes"/>
						</div>
						}

						{projectsContent?.title === 'WESTBURY LIBRARY' && 
						<div className="the-story-container">
							<div className="the-story-title">{'Colour Palette'}</div>
							<div className="the-story-decription">{'The primary colour scheme consisted of warm and cool colours. These colours were found within the signage for the Westbury library.'}</div>
							<img className="westbury-images" src={WestburyColourPalette} alt="wireframes"/>
						</div>
						}
					</div>

					<div className="the-story-container">
						<div className="the-story-title">{'Design Comps'}</div>
						<div className="the-story-decription">{'The final design comps after a few iterations and testing.'}</div>
						
						{ projectsContent?.features && 
						<div className="the-story-decription"> <b> {'Some features of the system include:'} </b> </div>}
						{ projectsContent?.features && 
						<div className="the-story-decription">
							<ul>
								{this.whoIsItForBody(projectsContent?.features)}
							
							</ul>  
						</div>
						}

						<div className="design-comps-images">
							{this.generateDesignCompsImages(projectsContent?.designCompsImages)}
						</div>
					</div>

					<div className="the-story-container">
					{ projectsContent?.challenges && 
						<div className="the-story-title">{'Challenges of the project'}</div>
					}
					{ projectsContent?.challenges &&
						<div className="the-story-decription">{projectsContent?.challenges}</div>
						}
						{ projectsContent?.whatIveLearned && 
						<div className="body-section-label">{'What I\'ve learned'}</div> }
						{ projectsContent?.whatIveLearned && 
						<div className="the-story-decription">
							<ul>
								{this.whoIsItForBody(projectsContent?.whatIveLearned)}
							
							</ul>  
						</div>
						}
						{ projectsContent?.whatIveAccomplished && 
						<div className="body-section-label">{'What I\'ve accomplished'}</div>}
						{ projectsContent?.whatIveAccomplished && 
						<div className="the-story-decription">{projectsContent?.whatIveAccomplished}</div>}
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