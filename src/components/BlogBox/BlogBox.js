import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import styles from 'components/BlogBox/BlogBoxStyle';
import BigDoubleText from 'components/BigDoubleText/BigDoubleText';

export default class BlogBox extends Component  {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div style={this.props.space ? styles.cardTwo : styles.card}>
				<div style={styles.label}>
					<div style={{zIndex:-1}}>
						<p style={styles.header}>{this.props.header}</p>
						<p style={styles.dateText}>{this.props.date}</p>
						<p style={styles.bodyText}>{this.props.description}</p>
					</div>
				</div>
			</div>
			);
		}
	}