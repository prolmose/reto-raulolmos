import React, { Component } from 'react';

import styles from 'screens/WelcomeScreen/WelcomeScreenStyle';
import IconDoubleText from 'components/IconDoubleText/IconDoubleText';
import ButtonsDoubleText from 'components/ButtonsDoubleText/ButtonsDoubleText';

class WelcomeScreen extends Component {
	render() {
		return (
			<div>
				<div style={styles.screen}>
					<body>
						<div style={styles.card}>
							<ButtonsDoubleText />
						</div>
					</body>
				</div>
				<footer style={styles.body}>
					<IconDoubleText
						icon1
						title= "Consectetur qui in tempor ."
						body= "Officia ut cillum occaecat sed dolor culpa est qui mollit magna."
					/>
					<IconDoubleText
						icon2
						title= "Consectetur qui in tempor ."
						body= "Officia ut cillum occaecat sed dolor culpa est qui mollit magna."
					/>
					<IconDoubleText
						title= "Consectetur qui in tempor ."
						body= "Officia ut cillum occaecat sed dolor culpa est qui mollit magna."
					/>
				</footer>
			</div>
		);
	}
}

export default WelcomeScreen;