import React from 'react';
import './third.scss';
import ss from './ss3.png';
import drone from './drone.png';
import cloud from './cloud.png';
import rope from './rope.png';
class Third extends React.Component {
	constructor() {
		super();
		this.state = {
			x: 60,
			lastScrollTop: 0
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll, true);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		console.log(window.pageYOffset);
	};
	allowDrop = (event) => {
		event.preventDefault();
	};

	handleClick = (event) => {
		// event.preventDefault();
		// var newCloud = document.getElementById('cloud');
		// var imgc = document.createElement(newCloud);
		// // //	img.style = { width: '100px' };
		// // img.src = cloud;
		// // document.getElementById('third-section').appendChild(img);
		// document.getElementById('third-section').appendChild(imgc);
		// var data = event.dataTransfer.getData("Text");
		// event.target.appendChild(document.getElementById(data));
		// document.getElementById("demo").innerHTML = "The p element was dropped";
	};
	render() {
		return (
			<div className="third-section" id="third">
				<form className="mt3 mw7 center pa4 br2-ns ba b--black-10">
					<fieldset className="cf bn ma0 pa0">
						<legend className="pa0 f5 f4-ns mb3 black-80">Contact Me</legend>

						<div className="cf flex flex-column">
							<input
								className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns mb3"
								placeholder="Your Email Address"
								type="text"
								name="email-address"
								value=""
								id="email-address"
							/>
							<textarea
								rows="10"
								cols="80"
								className=" mb3 f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns "
								placeholder="Your Email Address"
							/>
							<input
								className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns "
								type="submit"
								value="Submit"
							/>
						</div>
					</fieldset>
				</form>

				<div className="cloud-container">
					<img src={cloud} id="cloud" alt="" className="cloud" />
					<img src={cloud} id="cloud" alt="" className="cloud" />
					<img src={cloud} id="cloud" alt="" className="cloud" />
					<img src={cloud} id="cloud" alt="" className="cloud" />
					<img src={cloud} id="cloud" alt="" className="cloud" />
					<img src={cloud} id="cloud" alt="" className="cloud" />
					<img src={cloud} id="cloud" alt="" className="cloud" />
					<img src={drone} id="drone" alt="" className="drone" />
				</div>
			</div>
		);
	}
}

export default Third;
