import React from 'react';
import './pers.scss';
class Pers extends React.Component {
	handleIntro = (content = 'default content') => {
		//document.getElementById('intro').style.opacity = '1.0';
		document.getElementById('content').innerHTML = content;

		//document.getElementById('intro1').style.opacity = '1.0';
		document.getElementById('content1').innerHTML = content;
	};
	handleHide = () => {
		//	document.getElementById('intro').style.opacity = '0';
		//	document.getElementById('intro1').style.opacity = '0';
		document.getElementById('content').innerHTML = 'Hover to see the details of each project';
		document.getElementById('content1').innerHTML = 'Hover to see the details of each project';
	};
	render() {
		return (
			<div className="pers section section--featured" id="Portfolio">
				<div className="intro flex flex-row" id="intro" style={{ margin: '100px 60px 0 0', float: 'right' }}>
					<p className="center" id="content">
						Hover to see the details of each project
					</p>
				</div>

				<div className="row">
					<div
						className="column"
						onMouseLeave={this.handleHide}
						onMouseEnter={() =>
							this.handleIntro(
								'Face Identification Web App<br/>Using HTML, SASS, Tachyons,<br/>Clarifai API, React Framework, Postgresql'
							)}
					>
						<div className="ItemCard">
							<a className="ItemCard__dest cover" href="https://www.w3cplus.com" target="_blank" />
							<figure className="ItemCard__thumb">
								<img src="https://i.ibb.co/1Kx7n3M/sites1.png" height="340" width="510" alt="" />
								<span className="shadow cover" />
							</figure>
						</div>
					</div>
					<div
						className="column"
						onMouseLeave={this.handleHide}
						onMouseEnter={() =>
							this.handleIntro(
								'Face Identification Web App<br/>Using HTML, SASS, Tachyons,<br/>Clarifai API, React Framework, Postgresql'
							)}
					>
						<div className="ItemCard">
							<a className="ItemCard__dest cover" href="https://www.w3cplus.com" target="_blank" />
							<figure className="ItemCard__thumb">
								<img src="https://i.ibb.co/1Kx7n3M/sites1.png" height="340" width="510" alt="" />
								<span className="shadow cover" />
							</figure>
						</div>
					</div>
					<div
						className="column"
						onMouseLeave={this.handleHide}
						onMouseEnter={() =>
							this.handleIntro(
								'Face Identification Web App<br/>Using HTML, SASS, Tachyons,<br/>Clarifai API, React Framework, Postgresql'
							)}
					>
						<div className="ItemCard">
							<a className="ItemCard__dest cover" href="https://www.w3cplus.com" target="_blank" />
							<figure className="ItemCard__thumb">
								<img src="https://i.ibb.co/1Kx7n3M/sites1.png" height="340" width="510" alt="" />

								<span className="shadow cover" />
							</figure>
						</div>
					</div>
					<div
						className="column"
						onMouseLeave={this.handleHide}
						onMouseEnter={() =>
							this.handleIntro(
								'Face Identification Web App<br/>Using HTML, SASS, Tachyons,<br/>Clarifai API, React Framework, Postgresql'
							)}
					>
						<div className="ItemCard">
							<a className="ItemCard__dest cover" href="https://www.w3cplus.com" target="_blank" />
							<figure className="ItemCard__thumb">
								<img src="https://i.ibb.co/1Kx7n3M/sites1.png" height="340" width="510" alt="" />
								<span className="shadow cover" />
							</figure>
						</div>
					</div>
					<div
						className="column"
						onMouseLeave={this.handleHide}
						onMouseEnter={() =>
							this.handleIntro(
								'Face Identification Web App<br/>Using HTML, SASS, Tachyons,<br/>Clarifai API, React Framework, Postgresql'
							)}
					>
						<div className="ItemCard">
							<a className="ItemCard__dest cover" href="https://www.w3cplus.com" target="_blank" />
							<figure className="ItemCard__thumb">
								<img src="https://i.ibb.co/1Kx7n3M/sites1.png" height="340" width="510" alt="" />
								<span className="shadow cover" />
							</figure>
						</div>
					</div>
					<div
						className="column"
						onMouseLeave={this.handleHide}
						onMouseEnter={() =>
							this.handleIntro(
								'Face Identification Web App<br/>Using HTML, SASS, Tachyons,<br/>Clarifai API, React Framework, Postgresql'
							)}
					>
						<div className="ItemCard">
							<a className="ItemCard__dest cover" href="https://www.w3cplus.com" target="_blank" />
							<figure className="ItemCard__thumb">
								<img src="https://i.ibb.co/1Kx7n3M/sites1.png" height="340" width="510" alt="" />
								<span className="shadow cover" />
							</figure>
						</div>
					</div>
					<div
						className="column"
						onMouseLeave={this.handleHide}
						onMouseEnter={() =>
							this.handleIntro(
								'Face Identification Web App<br/>Using HTML, SASS, Tachyons,<br/>Clarifai API, React Framework, Postgresql'
							)}
					>
						<div className="ItemCard">
							<a
								className="ItemCard__dest cover"
								href="https://gigi1111.github.io/starwars-lookalike/"
								target="_blank"
							/>
							<figure className="ItemCard__thumb">
								<a target="_blank" href="https://gigi1111.github.io/starwars-lookalike/">
									<img src="https://i.ibb.co/1Kx7n3M/sites1.png" height="340" width="510" alt="" />
								</a>
								<span className="shadow cover" />
							</figure>
						</div>
					</div>
					<div
						className="column"
						onMouseLeave={this.handleHide}
						onMouseEnter={() =>
							this.handleIntro(
								'Face Identification Web App<br/>Using HTML, SASS, Tachyons,<br/>Clarifai API, React Framework, Postgresql'
							)}
					>
						<div className="ItemCard">
							<a className="ItemCard__dest cover" href="https://www.w3cplus.com" target="_blank" />
							<figure className="ItemCard__thumb">
								<img src="https://i.ibb.co/1Kx7n3M/sites1.png" height="340" width="510" alt="" />
								<span className="shadow cover" />
							</figure>
						</div>
					</div>
					<div
						className="column"
						onMouseLeave={this.handleHide}
						onMouseEnter={() =>
							this.handleIntro(
								'Face Identification Web App<br/>Using HTML, SASS, Tachyons,<br/>Clarifai API, React Framework, Postgresql'
							)}
					>
						<div className="ItemCard">
							<a
								className="ItemCard__dest cover"
								href="https://www.youtube.com/watch?v=iw0YfWNBFPw"
								target="_blank"
							/>
							<figure className="ItemCard__thumb">
								<a target="_blank" href="https://www.youtube.com/watch?v=iw0YfWNBFPw">
									<img src="https://i.ibb.co/ygjDZd7/site6.png" height="340" width="510" alt="" />
								</a>
								<span className="shadow cover" />
							</figure>
						</div>
					</div>
					<div
						className="column"
						onMouseLeave={this.handleHide}
						onMouseEnter={() =>
							this.handleIntro(
								'Face Identification Web App<br/>Using HTML, SASS, Tachyons,<br/>Clarifai API, React Framework, Postgresql'
							)}
					>
						<div className="ItemCard">
							<a
								className="ItemCard__dest cover"
								href="https://crwn-clothing-live-gigi.herokuapp.com/"
								target="_blank"
							/>
							<figure className="ItemCard__thumb">
								<img src="https://i.ibb.co/Cmz5KzT/site3.png" height="340" width="510" alt="" />
								<span className="shadow cover" />
							</figure>
						</div>
					</div>
					<div
						className="column"
						onMouseLeave={this.handleHide}
						onMouseEnter={() =>
							this.handleIntro(
								'ace Identification Web App<br/>Using HTML, SASS, Tachyons,<br/>Clarifai API, React Framework, Postgresql'
							)}
					>
						<div className="ItemCard">
							<a className="ItemCard__dest cover" href="https://www.w3cplus.com" target="_blank" />
							<figure className="ItemCard__thumb">
								<img src="https://i.ibb.co/QbK96RT/site5.png" height="340" width="510" alt="" />
								<span className="shadow cover" />
							</figure>
						</div>
					</div>
					<div
						className="column"
						onMouseLeave={this.handleHide}
						onMouseEnter={() =>
							this.handleIntro(
								'Face Identification Web App<br/>Using HTML, SASS, Tachyons,<br/>Clarifai API, React Framework, Postgresql'
							)}
					>
						<div className="ItemCard">
							<a
								className="ItemCard__dest cover"
								href="https://face-id-front-chungfan.herokuapp.com/"
								target="_blank"
							/>
							<figure className="ItemCard__thumb">
								<a target="_blank" href="https://face-id-front-chungfan.herokuapp.com/">
									<img src="https://i.ibb.co/yXyW6dg/site2.png" height="340" width="510" alt="" />
								</a>
								<span className="shadow cover" />
							</figure>
						</div>
					</div>
				</div>
				<div
					className="intro flex flex-row"
					id="intro1"
					style={{ zIndex: '5', right: '50px', marginTop: '820px', position: 'absolute' }}
				>
					<p className="center" id="content1">
						Hover to see the details of each project
					</p>
				</div>
			</div>
		);
	}
}

export default Pers;
