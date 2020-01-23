import React, {Component} from 'react';

import styles from 'components/BlogBox/BlogBoxStyle';

export default class BlogBox extends Component  {
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