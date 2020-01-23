import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
//import styles from 'components/ButtonsDoubleText/ButtonsDoubleTextStyle';
import BigDoubleText from 'components/BigDoubleText/BigDoubleText';

export default class ButtonsDoubleText extends Component  {
	render() {
		return (
			<div>
				<div>
					<BigDoubleText
						title= "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						body= "Mollit ullamco do dolor dolore."
					/>
				</div>
				<div>
					<Link to={'/solutions'} className="nav-link">
						<AwesomeButton type="secondary">Soluciones</AwesomeButton>
					</Link>
					<Link to={'/contact'} className="nav-link">
						<AwesomeButton type="secondary">Contacto</AwesomeButton>
					</Link>
				</div>
			</div>
			);
		}
	}