import Slider1 from 'assets/001 - Home/slider-1.jpg';
import {  Fonts, Colors } from 'styles/';

const HomeImage = require('assets/001 - Home/slider-1.jpg');
const { innerWidth: width, innerHeight: height } = window;


const ContactScreenStyle = {
	image: {
		 width: '101%',
		 height: '380px',
	},
	input: {
		padding: '2px',
		margin: '5px',
		color: 'red',
		background: 'blue',
		border: '0',
		borderRadius: '3px'
	},
	box: {
		padding: '30px',
	},
	title: {
		fontSize: Fonts.size.huge,
		color: "#067CF7",
		fontWeight: Fonts.weight.bold,
		margin: 0,
		padding: 0
	}
};

export default ContactScreenStyle;