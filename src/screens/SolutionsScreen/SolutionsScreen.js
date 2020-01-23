import React, { Component } from 'react';
import styles from 'screens/SolutionsScreen/SolutionsScreenStyle';
import SolutionBox from 'components/SolutionBox/SolutionBox';

import IconIMG1 from 'assets/001 - Home/icono-solucion-1.png';
import IconIMG2 from 'assets/001 - Home/icono-solucion-2.png';
import IconIMG3 from 'assets/001 - Home/icono-solucion-3.png';
import IconIMG4 from 'assets/001 - Home/icono-solucion-4.png';
import IconIMG5 from 'assets/001 - Home/icono-solucion-5.png';
import IconIMG6 from 'assets/001 - Home/icono-solucion-6.png';
import IconIMG7 from 'assets/001 - Home/icono-solucion-7.png';
import IconIMG8 from 'assets/001 - Home/icono-solucion-8.png';
import IconIMG9 from 'assets/001 - Home/icono-solucion-9.png';
import IconIMG10 from 'assets/001 - Home/icono-solucion-10.png';

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

class SolutionsScreen extends Component {
  render() {
    return (
		<div style={styles.screen}>
			<p style={styles.titleText}>SOLUCIONES</p>
			<div style={styles.itemLine}>
				<SolutionBox
					imageN= {IMG1}
					imageIcon= {IconIMG1}
					solutionID= "1" 
				/>
				<SolutionBox
					imageN= {IMG2}
					imageIcon= {IconIMG2}
					solutionID= "2" 
				/>
				<SolutionBox
					imageN= {IMG3}
					imageIcon= {IconIMG3}
					solutionID= "3" 
				/>
				<SolutionBox
					imageN= {IMG4}
					imageIcon= {IconIMG4}
					solutionID= "4" 
				/>
			</div>
			<div style={styles.itemLine}>
				<SolutionBox
					imageN= {IMG5}
					imageIcon= {IconIMG5}
					solutionID= "5" 
				/>
				<SolutionBox
					imageN= {IMG6}
					imageIcon= {IconIMG6}
					solutionID= "6" 
				/>
				<SolutionBox
					imageN= {IMG7}
					imageIcon= {IconIMG7}
					solutionID= "7" 
				/>
				<SolutionBox
					imageN= {IMG8}
					imageIcon= {IconIMG8}
					solutionID= "8" 
				/>
			</div>
			<div style={styles.itemLine}>
				<SolutionBox
					imageN= {IMG9}
					imageIcon= {IconIMG9}
					solutionID= "9" 
				/>
				<SolutionBox
					imageN= {IMG10}
					imageIcon= {IconIMG10}
					solutionID= "10" 
				/> 
			</div>
		</div>
    );
  }
}

export default SolutionsScreen;