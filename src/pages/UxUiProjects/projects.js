import Pro_Findheader from '../../assets/Pro-Find header.jpg';
import JourneyMap from '../../assets/Pro-Find 2.jpg';
import Persona from '../../assets/Pro-Find 3.jpg';
import Wireframes from '../../assets/Pro-Find 4.png';
import DesignComp1 from '../../assets/Pro-Find 5.jpg';
import DesignComp2 from '../../assets/Pro-Find 6.jpg';
import ARLProfilePic from '../../assets/arl-profile-pic.png';
import CapitecContainer from '../../assets/Capitec Header.jpg';
import WestburyHeader from '../../assets/Westbury 1.jpg';
import CapitecDesignComp1 from '../../assets/Capitec 1.jpg';
import CapitecDesignComp2 from '../../assets/Capitec 2.jpg';



export const projects = [
	{
		image: Pro_Findheader,
		imageAltText: 'ARL',
		title: 'PRO-FIND',
		storyDecription: 'The ProFind mobile application is aimed at SMME businesses in South Africa and job applicants alike. It is a mobile application that speeds up the scanning, shortlist and hiring process.',
		body: [
			{
				title: 'My role on the project',
				description: 'I served as the designer on the business side of the mobile application. This included UX research, sketches, wireframes and design comps.'
			},
			{
				title: 'Target audience:',
				description: 'SMME businesses in South Africa and job seeker alike.'
			},
			{
				title: 'The Problem',
				description: 'SMME businesses made use of old measures to find the ideal candidates. This meant that SMME businesses depended on recruitment companies and in-house H.R teams to find the best possible candidates. Using this old method to recruit applicants prolonged the interview and shortlist process. \n \n Job seekers were put off by the need to create an online profile and upload supporting documents to browse through job listings led to a lot of frustrations.\n \n'
			},
			{
				title: 'Solving the problem:',
				description: 'Designing a mobile application where SMME owners can be notified when candidates meet job requirements, shortlist potential candidates, and forward applicant CVs. Applicants can apply to multiple job posts without having to create user profiles. Users\' can quickly and easily upload their CVs, be notified when their CV has been received, and check the status of their application.'
			}
		],
		journeyMap: JourneyMap,
		personas: ['We made use of their problems, goals and personalities', 'The personas affected the design in a positive way because it enabled us to add additional features like a checklist which allows businesses to speed up the application process.'],
		personaImages: [Persona],
		designCompsImages: [DesignComp1, DesignComp2],
		wireframes: Wireframes,
		whoIsItFor: ['Sketch', 'Adobe Photoshop', 'Adobe Illustrator'],
		whoIsItForImages: ['Sketch', 'Adobe Photoshop', 'Adobe Illustrator'],
		challenges: 'The main problem that I\'ve encountered during this project was finding and interacting with users this was due to the COVID-19 pandemic.',
		whatIveAccomplished: 'My aim was to see this project through from start to finish, to be able to hand the final designs over to the development team after months of research, testing and iterations.',
		whatIveLearned: ['The importance of user testing and iteration', 'What goes into starting a new project from the ground up', 'Creating detailed user journeys maps and user personas']
	},
	{
		image: CapitecContainer,
		imageAltText: 'ARL',
		title: 'CAPITEC',
		storyDecription: 'WhatsApp for Relationship Managers is a PWA (Progressive Web Application) that allows quick and easy communication between Relationship Managers and their bankers. Relationship managers can close, refer, or escalate requests made by bankers to ensure their needs have been met.',
		body: [
			{
				title: 'My role on the project',
				description: 'I served as the designer on the Capitec project.'
			},
			{
				title: 'Target audience:',
				description: 'Capitec Relationship managers and their clients.'
			},
			{
				title: 'The Problem',
				description: 'Currently, Transactional bankers and Relationship managers communicate through social platforms, for example, Whatsapp. However, Relationship managers make use of their personal WhatsApp account when attending to bankers\' requests or are required to carry a bank-allocated cell phone with them. This becomes difficult because Capitec bank has no overview of these conversations which contributes to bad customer service.'
			},
			{
				title: 'Solving the problem:',
				description: 'Creating a WhatsApp portal where Relationship managers can communicate with their bankers, manage their client portfolios, and do follow-ups to ensure clients\' expectations have been met. \nThis allows for:\n',
				bodylist: ['Customers want to be helped in the most convenient and quickest possible way', 'Relationship managers and Transactional bankers want to serve their customers in a timely and convenient manner','Relationship managers have an overview of client conversations. When a query is not solved in a timeous manner, it can be escalated - thus meeting the clients\'expectations'],
			}
		],
		whoIsItFor: ['Sketch', 'Adobe Photoshop', 'Adobe Illustrator'],
		whoIsItForImages: ['Sketch', 'Adobe Photoshop', 'InVision', 'Abstract'],
		designCompsImages: [CapitecDesignComp1, CapitecDesignComp2],
		challenges: 'The main problem that I\'ve encountered during this project was finding and interacting with users this was due to the COVID-19 pandemic.',
		whatIveAccomplished: 'My aim was to see this project through from start to finish, to be able to hand the final designs over to the development team after months of research, testing and iterations.',
		whatIveLearned: ['The importance of user testing and iteration', 'What goes into starting a new project from the ground up', 'Creating detailed user journeys maps and user personas']		
	},
	{
		image: WestburyHeader,
		imageAltText: 'ARL',
		title: 'WESTBURY LIBRARY',
		storyDecription: 'Type here',
		body: [
			{
				title: 'My role on the project',
				description: 'The Westbury mobile application is aimed at SMME businesses in South Africa and job applicants alike. It is a mobile application that speeds up the scanning, shortlist and hiring process.'
			},
			{
				title: 'Target audience:',
				description: 'SMME businesses in South Africa and job seeker alike.'
			},
			{
				title: 'The Problem',
				description: 'The ProFind mobile application is aimed at SMME businesses in South Africa and job applicants alike. It is a mobile application that speeds up the scanning, shortlist and hiring process.'
			},
			{
				title: 'Solving the problem:',
				description: 'The ProFind mobile application is aimed at SMME businesses in South Africa and job applicants alike. It is a mobile application that speeds up the scanning, shortlist and hiring process.'
			}
		],
		journeyMap: ARLProfilePic,
		wireframes: ARLProfilePic,
		whoIsItFor: ['Sketch', 'Adobe Photoshop', 'Adobe Illustrator'],
		whoIsItForImages: ['Sketch', 'Adobe Photoshop', 'Adobe Illustrator'],
		challenges: 'The main problem that I\'ve encountered during this project was finding and interacting with users this was due to the COVID-19 pandemic.',
		whatIveAccomplished: 'My aim was to see this project through from start to finish, to be able to hand the final designs over to the development team after months of research, testing and iterations.',
		whatIveLearned: ['The importance of user testing and iteration', 'What goes into starting a new project from the ground up', 'Creating detailed user journeys maps and user personas']		
	},
	{
		image: ARLProfilePic,
		imageAltText: 'ARL',
		title: 'ABSA',
		body: [
			{
				title: 'My role on the project',
				description: 'The ABSA mobile application is aimed at SMME businesses in South Africa and job applicants alike. It is a mobile application that speeds up the scanning, shortlist and hiring process.'
			},
			{
				title: 'Target audience:',
				description: 'SMME businesses in South Africa and job seeker alike.'
			},
			{
				title: 'The Problem',
				description: 'The ProFind mobile application is aimed at SMME businesses in South Africa and job applicants alike. It is a mobile application that speeds up the scanning, shortlist and hiring process.'
			},
			{
				title: 'Solving the problem:',
				description: 'The ProFind mobile application is aimed at SMME businesses in South Africa and job applicants alike. It is a mobile application that speeds up the scanning, shortlist and hiring process.'
			}
		],
		journeyMap: ARLProfilePic,
		wireframes: ARLProfilePic,
		whoIsItFor: ['Sketch', 'Adobe Photoshop', 'Adobe Illustrator'],
		whoIsItForImages: ['Sketch', 'Adobe Photoshop', 'Adobe Illustrator'],
		challenges: 'The main problem that I\'ve encountered during this project was finding and interacting with users this was due to the COVID-19 pandemic.',
		whatIveAccomplished: 'My aim was to see this project through from start to finish, to be able to hand the final designs over to the development team after months of research, testing and iterations.',
		whatIveLearned: ['The importance of user testing and iteration', 'What goes into starting a new project from the ground up', 'Creating detailed user journeys maps and user personas']
	},
	{
		image: ARLProfilePic,
		imageAltText: 'ARL',
		title: 'HUAWEI',
		body: [
			{
				title: 'My role on the project',
				description: 'The HUAWEI mobile application is aimed at SMME businesses in South Africa and job applicants alike. It is a mobile application that speeds up the scanning, shortlist and hiring process.'
			},
			{
				title: 'Target audience:',
				description: 'SMME businesses in South Africa and job seeker alike.'
			},
			{
				title: 'The Problem',
				description: 'The ProFind mobile application is aimed at SMME businesses in South Africa and job applicants alike. It is a mobile application that speeds up the scanning, shortlist and hiring process.'
			},
			{
				title: 'Solving the problem:',
				description: 'The ProFind mobile application is aimed at SMME businesses in South Africa and job applicants alike. It is a mobile application that speeds up the scanning, shortlist and hiring process.'
			}
		],
		journeyMap: ARLProfilePic,
		wireframes: ARLProfilePic,
		whoIsItFor: ['Sketch', 'Adobe Photoshop', 'Adobe Illustrator'],
		whoIsItForImages: ['Sketch', 'Adobe Photoshop', 'Adobe Illustrator'],
		challenges: 'The main problem that I\'ve encountered during this project was finding and interacting with users this was due to the COVID-19 pandemic.',
		whatIveAccomplished: 'My aim was to see this project through from start to finish, to be able to hand the final designs over to the development team after months of research, testing and iterations.',
		whatIveLearned: ['The importance of user testing and iteration', 'What goes into starting a new project from the ground up', 'Creating detailed user journeys maps and user personas']
	},
	{
		image: ARLProfilePic,
		imageAltText: 'ARL',
		title: 'VIKELA TECH \nWEBSITE\n',
		body: [
			{
				title: 'My role on the project',
				description: 'The VIKELA TECH WEBSITE mobile application is aimed at SMME businesses in South Africa and job applicants alike. It is a mobile application that speeds up the scanning, shortlist and hiring process.'
			},
			{
				title: 'Target audience:',
				description: 'SMME businesses in South Africa and job seeker alike.'
			},
			{
				title: 'The Problem',
				description: 'The ProFind mobile application is aimed at SMME businesses in South Africa and job applicants alike. It is a mobile application that speeds up the scanning, shortlist and hiring process.'
			},
			{
				title: 'Solving the problem:',
				description: 'The ProFind mobile application is aimed at SMME businesses in South Africa and job applicants alike. It is a mobile application that speeds up the scanning, shortlist and hiring process.'
			}
		],
		journeyMap: ARLProfilePic,
		wireframes: ARLProfilePic,
		whoIsItFor: ['Sketch', 'Adobe Photoshop', 'Adobe Illustrator'],
		whoIsItForImages: ['Sketch', 'Adobe Photoshop', 'Adobe Illustrator'],
		challenges: 'The main problem that I\'ve encountered during this project was finding and interacting with users this was due to the COVID-19 pandemic.',
		whatIveAccomplished: 'My aim was to see this project through from start to finish, to be able to hand the final designs over to the development team after months of research, testing and iterations.',
		whatIveLearned: ['The importance of user testing and iteration', 'What goes into starting a new project from the ground up', 'Creating detailed user journeys maps and user personas']
	},
	{
		image: ARLProfilePic,
		imageAltText: 'ARL',
		title: 'VIKELA PORTAL \nLOGIN\n',
		body: [
			{
				title: 'My role on the project',
				description: 'The VIKELA PORTAL LOGIN mobile application is aimed at SMME businesses in South Africa and job applicants alike. It is a mobile application that speeds up the scanning, shortlist and hiring process.'
			},
			{
				title: 'Target audience:',
				description: 'SMME businesses in South Africa and job seeker alike.'
			},
			{
				title: 'The Problem',
				description: 'The ProFind mobile application is aimed at SMME businesses in South Africa and job applicants alike. It is a mobile application that speeds up the scanning, shortlist and hiring process.'
			},
			{
				title: 'Solving the problem:',
				description: 'The ProFind mobile application is aimed at SMME businesses in South Africa and job applicants alike. It is a mobile application that speeds up the scanning, shortlist and hiring process.'
			}
		],
		journeyMap: ARLProfilePic,
		wireframes: ARLProfilePic,
		whoIsItFor: ['Sketch', 'Adobe Photoshop', 'Adobe Illustrator'],
		whoIsItForImages: ['Sketch', 'Adobe Photoshop', 'Adobe Illustrator'],
		challenges: 'The main problem that I\'ve encountered during this project was finding and interacting with users this was due to the COVID-19 pandemic.',
		whatIveAccomplished: 'My aim was to see this project through from start to finish, to be able to hand the final designs over to the development team after months of research, testing and iterations.',
		whatIveLearned: ['The importance of user testing and iteration', 'What goes into starting a new project from the ground up', 'Creating detailed user journeys maps and user personas']
	},
	{
		image: ARLProfilePic,
		imageAltText: 'ARL',
		title: 'VIKELA PORTAL \nPORTAL\n',
		body: [
			{
				title: 'My role on the project',
				description: 'The ProFind mobile application is aimed at SMME businesses in South Africa and job applicants alike. It is a mobile application that speeds up the scanning, shortlist and hiring process.'
			},
			{
				title: 'Target audience:',
				description: 'SMME businesses in South Africa and job seeker alike.'
			},
			{
				title: 'The Problem',
				description: 'The ProFind mobile application is aimed at SMME businesses in South Africa and job applicants alike. It is a mobile application that speeds up the scanning, shortlist and hiring process.'
			},
			{
				title: 'Solving the problem:',
				description: 'The ProFind mobile application is aimed at SMME businesses in South Africa and job applicants alike. It is a mobile application that speeds up the scanning, shortlist and hiring process.'
			}
		],
		journeyMap: ARLProfilePic,
		wireframes: ARLProfilePic,
		whoIsItFor: ['Sketch', 'Adobe Photoshop', 'Adobe Illustrator'],
		whoIsItForImages: ['Sketch', 'Adobe Photoshop', 'Adobe Illustrator'],
		challenges: 'The main problem that I\'ve encountered during this project was finding and interacting with users this was due to the COVID-19 pandemic.',
		whatIveAccomplished: 'My aim was to see this project through from start to finish, to be able to hand the final designs over to the development team after months of research, testing and iterations.',
		whatIveLearned: ['The importance of user testing and iteration', 'What goes into starting a new project from the ground up', 'Creating detailed user journeys maps and user personas']
	},
	{
		image: ARLProfilePic,
		imageAltText: 'ARL',
		title: 'SENSEFLOW',
		body: [
			{
				title: 'My role on the project',
				description: 'The ProFind mobile application is aimed at SMME businesses in South Africa and job applicants alike. It is a mobile application that speeds up the scanning, shortlist and hiring process.'
			},
			{
				title: 'Target audience:',
				description: 'SMME businesses in South Africa and job seeker alike.'
			},
			{
				title: 'The Problem',
				description: 'The ProFind mobile application is aimed at SMME businesses in South Africa and job applicants alike. It is a mobile application that speeds up the scanning, shortlist and hiring process.'
			},
			{
				title: 'Solving the problem:',
				description: 'The ProFind mobile application is aimed at SMME businesses in South Africa and job applicants alike. It is a mobile application that speeds up the scanning, shortlist and hiring process.'
			}
		],
		journeyMap: ARLProfilePic,
		wireframes: ARLProfilePic,
		whoIsItFor: ['Sketch', 'Adobe Photoshop', 'Adobe Illustrator'],
		whoIsItForImages: ['Sketch', 'Adobe Photoshop', 'Adobe Illustrator'],
		challenges: 'The main problem that I\'ve encountered during this project was finding and interacting with users this was due to the COVID-19 pandemic.',
		whatIveAccomplished: 'My aim was to see this project through from start to finish, to be able to hand the final designs over to the development team after months of research, testing and iterations.',
		whatIveLearned: ['The importance of user testing and iteration', 'What goes into starting a new project from the ground up', 'Creating detailed user journeys maps and user personas']
	}
];