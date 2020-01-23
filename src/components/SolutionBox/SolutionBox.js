import React, {Component} from 'react';

import styles from 'components/SolutionBox/SolutionBoxStyle';

export default class BlogBox extends Component  {
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