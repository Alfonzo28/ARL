import React, { Component } from 'react';
import './Contact.scss';
import Email from '../../assets/contact-image.svg';
import { CONTACT_ME } from '../../constants/headerConstants';
import { sendContactInfo } from '../../helpers/generalHelper';
import SnackBar from '../../components/SnackBar/SnackBar';

export default class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			emailAddress: '',
			message: '',
			showError: false,
			showSnackbar: false,
			snackbarMessage: ''
		};
	}

	handleTextChange(inputText, field) {
		this.setState({ [field]: inputText });
	}

	async sendContactInfo() {
		const response = await sendContactInfo(this.state);
		this.setState({ showSnack: true, snackbarMessage: response?.data?.message })
	}

	render() {	
		const lastName = 'lastName';
		const firstName = 'firstName';
		const emailAddress = 'emailAddress';
		const message = 'message';

		return (
			<div className="contact-container">
				{this.state.showSnack &&
        		<SnackBar
					message={this.state.snackbarMessage}
				/>
				}
				<div className="contact-container-left">
					<div className="contact-title">{'Get in touch'}</div>
					<div className="contact-title-end-container">
						<div className="contact-title-end">{'I\'d love to'}&nbsp;</div>
						<div className="contact-title-end-hear">{'hear'}&nbsp;</div>
						<div className="contact-title-end">{'from you.'}</div>
					</div>
					<img className="email-icon" src={Email} alt="email"/>
				</div>
				<div className="form-field-container">
					<div className="name-fields-container">
						<input
							className={this.state.showError ? 'error' : 'input'}
							placeholder={'First Name'}
							value={this.state[firstName]}
							type={'text'}
							name={firstName}
							onChange={(e)=>this.handleTextChange(e.target.value, e.target.name)}
						/>

						<input
							className={this.state.showError ? 'error' : 'input'}
							type={'text'}
							placeholder={'Last Name'}
							value={this.state[lastName]}
							name={lastName}
							onChange={(e)=>this.handleTextChange(e.target.value, e.target.name)}
						/>
					</div>
					<div className="phoneNumber-field-container">
						<input
							className={this.state.showError ? 'error' : 'input'}
							placeholder={'Email address'}
							value={this.state[emailAddress]}
							type={'text'}
							name={emailAddress}
							onChange={(e)=>this.handleTextChange(e.target.value, e.target.name)}
						/>
					</div>
					<div className="message-field-container">
						<input
							className={this.state.showError ? 'error' : 'input'}
							placeholder={'Message'}
							value={this.state[message]}
							type={'text'}
							name={message}
							onChange={(e)=>this.handleTextChange(e.target.value, e.target.name)}
						/>
					</div>                    
					<button
						className="contact-button"
						onClick={()=>this.sendContactInfo()}
					>
						{CONTACT_ME}
					</button>
				</div>				
			</div>
		);
	}
}
