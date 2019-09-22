import React from 'react';
import './showcase.scss';
import zipper from './zipper.png';
import up1 from './up1.png';
import up2 from './up2.png';
import up3 from './up3.png';
import down1 from './down1.png';
import down2 from './down2.png';
import down3 from './down3.png';
/*
import up1 from './1up.png';
import up2 from './2up.png';
import up3 from './3up.png';
import down1 from './1down.png';
import down2 from './2down.png';
import down3 from './3down.png';
import metal from './metal.jpg';
*/
//dt dtc tc display table, table cell
const Showcase = () => {
	return (
		<div className="show  flex flex-row" id="Showcase">
			<div className="face flex flex-column">
				<div className="upcon flex flex-row">
					<img className="up up1" src={up1} />
					<img className="up up2" src={up2} />
					<img className="up up3" src={up3} />
				</div>

				<h3 className=" center white ">Not your average Web Developer!</h3>

				<div className="downcon   flex flex-row">
					<img className="down down1" src={down2} />
					<img className="down down2" src={down1} />
					<img className="down down3" src={down3} />
				</div>
			</div>
			<div />
		</div>
	);
};
export default Showcase;
