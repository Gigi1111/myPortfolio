import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Showcase from './components/showcase/showcase';
//import Portfolio from './components/portfolio/portfolio';
import First from './components/first/first';
import Third from './components/about/third';
import Pers from './components/pers/pers';
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			port: true
		};
	}
	render() {
		return (
			<div className="App ">
				<div class="icon-bar">
					<a href="https://github.com/Gigi1111" target="_blank" class="github">
						<i class="fa fa-github" />
					</a>

					<a target="_blank" href="https://www.linkedin.com/in/chung-fan-tsai-433230175/" class="linkedin">
						<i class="fa fa-linkedin" />
					</a>
				</div>
				<Navbar />

				<Showcase />

				<Pers />
				<Third />
			</div>
		);
	}
}

export default App;
