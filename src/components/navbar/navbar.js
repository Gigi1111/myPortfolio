import React from 'react';
import './navbar.scss';
class Navbar extends React.Component {
	render() {
		return (
			<nav className="dt w-100 border-box " id="navbar">
				<a className="dtc v-mid mid-gray link dim" href="#About" title="Home">
					<img src="https://i.ibb.co/XXf89HN/logo2.png" className="dib w2 h2 br-100" alt="Site Name" />
				</a>
				<div className="dtc v-mid w-75 tr">
					<a className="link dim dark-gray f8 f7-ns dib mr3 mr4-ns" href="#About" title="About">
						About Me
					</a>
					<a className="link dim dark-gray f8 f7-ns dib mr3 mr4-ns" href="#Portfolio" title="Portfolio">
						Portfolio
					</a>
					<a className="link dim dark-gray f8 f7-ns dib" href="#Contact" title="Contact">
						Contact
					</a>
				</div>
			</nav>
		);
	}
}
export default Navbar;
