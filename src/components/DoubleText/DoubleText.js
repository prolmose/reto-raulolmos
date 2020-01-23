import React, {Component} from 'react';
import styles from 'components/DoubleText/DoubleTextStyle';

export default class DoubleText extends Component  {
	render() {
		return (
			<div>
				<div>
					<p style={styles.title}>{this.props.title}</p>
				</div>
				<div>
					<p style={styles.body}>{this.props.body}</p>
				</div>
			</div>
			);
		}
	}