import React, {Component} from 'react';
import DoubleText from 'components/DoubleText/DoubleText';
import styles from 'components/IconDoubleText/IconDoubleTextStyle'
import Icon1 from 'assets/001 - Home/icono-destacado-1.png';
import Icon2 from 'assets/001 - Home/icono-destacado-2.png';
import Icon3 from 'assets/001 - Home/icono-destacado-3.png';

export default class IconDoubleText extends Component  {
	render() {
		return (
			<div style={styles.position}>
				<div style={{paddingRight: '10px'}}>
					{this.props.icon1  ? <img style={{width: '80px'}} src={Icon1}/> : this.props.icon2  ? <img style={{width: '80px'}} src={Icon2}/> : <img style={{width: '80px'}} src={Icon3}/> }
				</div>
				<div>
					<DoubleText
						title= {this.props.title}
		        		body= {this.props.body}
					/>
					</div>
			</div>
		);
	}
}