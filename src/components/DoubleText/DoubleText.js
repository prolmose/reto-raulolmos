import React, {Component} from 'react';
import styles from 'components/DoubleText/DoubleTextStyle';

export default class DoubleText extends Component  {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
				<div>
					<a style={styles.title}>{this.props.title}</a>
				</div>
				<div>
					<a style={styles.body}>{this.props.body}</a>
				</div>
			</div>
			);
		}
	}