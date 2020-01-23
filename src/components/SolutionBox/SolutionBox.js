import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import styles from 'components/SolutionBox/SolutionBoxStyle';
import BigDoubleText from 'components/BigDoubleText/BigDoubleText';

const IMG1 = require('assets/001 - Home/foto-solucion-1.jpg');
const IMG2 = require('assets/001 - Home/foto-solucion-2.jpg');
const IMG3 = require('assets/001 - Home/foto-solucion-3.jpg');
const IMG4 = require('assets/001 - Home/foto-solucion-4.jpg');
const IMG5 = require('assets/001 - Home/foto-solucion-5.jpg');
const IMG6 = require('assets/001 - Home/foto-solucion-6.jpg');
const IMG7 = require('assets/001 - Home/foto-solucion-7.jpg');
const IMG8 = require('assets/001 - Home/foto-solucion-8.jpg');
const IMG9 = require('assets/001 - Home/foto-solucion-9.jpg');
const IMG10 = require('assets/001 - Home/foto-solucion-10.jpg');


export default class BlogBox extends Component  {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div 
				style={{
					backgroundImage: `url(${this.props.imageN})`,
					backgroundSize: 'cover',
					position: 'relative',
					width: '250px',
					height: '300px',
					margin: '20px',
				}}>
				<div style={styles.label}>
					<div style={{zIndex:-1}}>
						<img src={this.props.imageIcon} style={{height: '60px', paddingLeft: '50px'}} alt="logo" />
						<p style={styles.titleText}>SOLUCIÓN</p>
						<p style={styles.bodyText}>{"DESTACADA " + this.props.solutionID}</p>
					</div>
				</div>
			</div>
			);
		}
	}