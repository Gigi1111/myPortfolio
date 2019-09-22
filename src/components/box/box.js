import React from 'react';
import './box.scss';
import s1 from './ss1.png';
import s2 from './ss2.png';
import s3 from './ss4.png';
import s4 from './ss3.png';
import g1 from './giftwrap.jpg';
import g2 from './giftwrap2.png';
// var elmnt = document.getElementById('page');
// var x = elmnt.scrollLeft;
// var y = elmnt.scrollTop;
//document.getElementById('demo').innerHTML = 'Horizontally: ' + x + 'px<br>Vertically: ' + y + 'px';
//dt dtc tc display table, table cell
class PortfolioHead extends React.Component {
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
		var x = this.state.x;
		var st = window.pageYOffset;
		if (st > this.state.lastScrollTop) {
			// downscroll code
			x++;
		} else {
			// upscroll code
			x--;
		}

		document.getElementById('box-faces').style.transform = `rotateY(${st}deg)`;
		document.getElementById('shadow').style.transform = `rotateY(${st}deg)`;
		this.setState({
			lastScrollTop: st <= 0 ? 0 : st,
			x: x
		});
		document.getElementById('soldiers').style.transform = `translateX(${x / 2}px)`;
		this.setState({
			lastScrollTop: st <= 0 ? 0 : st,
			x: x
		});
		/*
		var rot = st % 40;
		var rrot = 20 - rot;

		var all = document.querySelectorAll('.soldier');
		for (var i = 0; i < 4; i++) {
			var d = (i + 1) * 10 / 100;

			all[i].style.transform = `rotate(${rrot}deg)`;
			all[i].style.transition = `all ${d}s 0.01s`;
		}*/
	};
	render() {
		return (
			<div className="pinkSection">
				{/*soliders */}
				<div className="soldiers flex flex-row" id="soldiers">
					<div className="flex flex-column   soldier-box">
						<img src={s1} className="soldier " />
						<div className="s-shadow center ">&nbsp;</div>
					</div>
					<div className="flex flex-column   soldier-box">
						<img src={s2} className="soldier " />
						<div className="s-shadow center ">&nbsp;</div>
					</div>
					<div className="flex flex-column   soldier-box">
						<img src={s3} className="soldier " />
						<div className="s-shadow center ">&nbsp;</div>
					</div>
					<p className="text">I love interactive Web Apps</p>

					<div className="flex flex-column   soldier-box">
						<img src={s4} className="soldier " />
						<div className="s-shadow center ">&nbsp;</div>
					</div>
				</div>
				<div className="page flex flex-row" onScroll={this.handleScroll}>
					<div className="container ba" onScroll={this.handleScroll}>
						<div className="shadow-wrapper">
							<div className="shadow" id="shadow">
								<div>&nbsp;</div>
							</div>
						</div>
						<div className="box-wrapper ba" onScroll={this.handleScroll}>
							<div className="box-faces" id="box-faces">
								<div className="box-face box-face--is-front">
									<p>
										<i className="icon-rocket icon-4x" />
									</p>
								</div>
								<div className="box-face-lid box-face--is-front-lid">&nbsp;</div>
								<div className="box-face box-face--is-back">
									<p>
										<i className="icon-rocket icon-4x" />
									</p>
								</div>
								<div className="box-face-lid box-face--is-back-lid">&nbsp;</div>
								<div className="box-face box-face--is-top">&nbsp;</div>
								<div className="box-face box-face--is-bottom">&nbsp;</div>
								<div className="box-face-lid box-face--is-left-lid">&nbsp;</div>
								<div className="box-face box-face--is-left">
									<p>
										<i className="icon-rocket icon-4x" />
									</p>
								</div>
								<div className="box-face box-face--is-right">
									<p>
										<i className="icon-rocket icon-4x" />
									</p>
								</div>
								<div className="box-face-lid box-face--is-right-lid">&nbsp;</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default PortfolioHead;

/*
<a className="black link dim pointer" target="_blank" href="https://crwn-clothing-live-gigi.herokuapp.com/">
				CROWN SHOPPING WEBSITE
			</a> */
