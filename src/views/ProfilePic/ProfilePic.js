import React, { Component } from 'react';
import ARLProfilePic from '../../assets/arl-profile-pic.png';
import './ProfilePic.scss';

export default class ProfilePic extends Component {
	render() {
		return (
			<div className="profile-pic">
				<div className="profile-pic-container">
					<img className="pic" src={ARLProfilePic} alt="profile-pic"/>
					<div className="profile-pic-border"/>
					<div className="profile-pic-caption">{'PHOTO BY: TRUMIEYES'}</div>
				</div>
			</div>
		);
	}
}
