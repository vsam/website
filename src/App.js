import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
				<link href="https://fonts.googleapis.com/css?family=Alegreya|Cormorant+Garamond|Sorts+Mill+Goudy" rel="stylesheet"></link>
				<header className="App-header">
					<h1>Sam Vedernikoff</h1>					
				</header>
				<body>
					<hr style={{width:1000}}/>
						<div id="wrapper">
							<div id="first">
								<h2>Work Experience</h2>
							</div>
							<div id="second">
								<p>Full Stack Web Development Intern</p>
								<p>Administrative Assistant</p>
							</div>
							<div id ="third">
								<p>Occuspace (06/18 - 10/18)</p>
								<p>John Stewart Company (06/16 - 09/16)</p>
							</div>
						</div>
						<hr style={{width:1000}}/>
						<div id="wrapper">
							<div id="first">
								<h2>Projects</h2>
							</div>
							<div id="second">
								<p>
									<a href="https://github.com/vsam/TouchTop">App Sync</a>
								</p>
								<p>
									<a href="https://github.com/vsam/App-Sync-Companion">App Sync Companion</a>
								</p>
								<p>
									<a href="https://github.com/vsam/property-database">Property Database</a>
								</p>
							</div>
							<div id="third">
								<p>Android (2018)</p>
								<p>Javascript (2018)</p>
								<p>Java (2017)</p>
							</div>
						</div>
						<hr style={{width:1000}}/>
						<p>Contact Info: samvedernikoff@gmail.com</p>
					
				</body>
			</div>
		);
	}
}

export default App;