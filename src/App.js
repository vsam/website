import React, { Component } from 'react';
import WorkExperience from './components/work_experience';
import Projects from './components/projects';
import Education from './components/education';
import Profile from './components/profile';

import './App.css';

class App extends Component {
	render() {
		return (
			<div class="row">
				<div class="column">
					<Profile />
				</div>
				<div class="column">
					<WorkExperience />
				</div>
				<div class="column">
					<Projects />
				</div>
				<div class="column">
					<Education />
				</div>
			</div>
		);
	}
}

export default App;