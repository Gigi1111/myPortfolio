import React from 'react';
import './third.scss';
import pic from './me.jpg';
import htw from './education.png';
import hack from './experience.png';
import skill from './skills.png';
import arrow from './arrow.png';
class Third extends React.Component {
	render() {
		return (
			<div className="third-section" id="About">
				<div className="triangleBlack">
					{/*<div className="ticker">
						HTML · Pug · CSS · SASS · Bootstrap · Trachyons · Javascript · Node JS · React.js · Redux ·
						MongoDB · PostgreSQL · Django · Python · JAVA · AdobeXD ·
		</div>*/}
				</div>

				<div className="third-content">
					<div className="head center flex flex-row">
						<p className="start">
							I'm a full stack Javascript and Django web developer<br />
							who wants to change the world one web site at a time.<br />
						</p>
					</div>

					<div className="blocks white center flex flex-column">
						Education
						<img src={htw} />
						<div className="detail center" id="detail">
							<br />
							HTW Berlin / University of Applied Science
							<br /> B.S. of Media Informatics (current)
							<br />
							<br />
							National Cheng-Chi University
							<br /> B.A. of English and Computer Science Minor (finished in 2015)
						</div>
					</div>
					<div className="blocks white center flex flex-column">
						Experience : Hackathon Finalist
						<img src={hack} />
						<div className="detail center" id="detail">
							<br />
							CopenHacks at Microsoft Copenhagen: Finalist
							<br /> built a Mobile App Prototype for localization using Flutter, Google API, and AdobeXD
							<br />
							<br />
							TechCrunch Hackathon : Participant
							<br /> built a website to trace material composition for a natural resource company
						</div>
					</div>
					<div className="blocks white center flex flex-column">
						Skills
						<img src={skill} />
						<div className="detail center" id="detail">
							<br />
							Completed over 80hrs of Full Stack Developer Course and Assignments on Udemy
						</div>
					</div>
					<div className="head head2 center flex flex-row" id="Contact">
						<img src={arrow} />
						<p className="start">
							Contact me!
							<br />
							Let's build something great together!<br />
							<br />
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Third;
