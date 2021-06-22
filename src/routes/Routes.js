import React, { Component } from 'react';
import { HashRouter, Switch, Route} from 'react-router-dom';
import { HOME_URL, UX_UI_PROJECTS_URL, PROJECT_URL } from '../constants/urlConstants';
import UxUiProjects from '../pages/UxUiProjects/UxUiProjects';
import Project from '../pages/Project/Project';
import Home from '../pages/Home/Home';

class Routes extends Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route exact path={HOME_URL}>
						<Home />
					</Route>
					<Route exact path={UX_UI_PROJECTS_URL}>
						<UxUiProjects />
					</Route>
					<Route exact path={PROJECT_URL + '/:index'}>
						<Project />
					</Route>
				</Switch>
			</HashRouter>
		);
	}
}

export default Routes;
