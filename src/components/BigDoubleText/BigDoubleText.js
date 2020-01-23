import React, {Component} from 'react';
import styles from 'components/BigDoubleText/BigDoubleTextStyle';

export default class BigDoubleText extends Component  {
	render() {
		return (
			<div style={styles.box}>
				<div>
					<h1 style={styles.highText}>{this.props.title}</h1>
				</div>
				<div>
					<h1 style={styles.lowText}>{this.props.body}</h1>
				</div>
			</div>
			);
		}
	}