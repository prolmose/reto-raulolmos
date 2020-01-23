import Slider1 from 'assets/001 - Home/slider-1.jpg';
import {  Fonts, Colors } from 'styles/';

const HomeImage = require('assets/001 - Home/slider-1.jpg');
const { innerWidth: width, innerHeight: height } = window;


const HomeStyle = {
	screen: {
		 width: '100%',
		 height: '800px',
		 backgroundImage: `url(${HomeImage})`,
		 backgroundSize: 'cover'	
	},
	topBar: {
		position: "absolute",
		top: height > 768 ? '10%' : '5%',
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		width: width > 480 ? '100%': '60%',
		height: height > 768 ? '5%' : '15%',
		backgroundColor: '#067CF7',
		borderBottom: 'white',
		fontWeight: "bold",
		padding: "0px 20px",
		boxSizing: "border-box"
	},
	navBar: {
		justifyContent: 'space-evenly',
		flexDirection: "row",
	    display:'flex',
	},
	middleBar: {
		justifyContent: 'space-evenly',
		position: 'relative',
		flexDirection: "row",
	    display:'flex',
	},
	content:{
		top: '50px',
	},
	image: {
		height: 400,
		width: '100%'
	},
	body: {
		flexDirection: "row",
	    display:'flex',
	    justifyContent: 'space-evenly',
	    marginPadding: '20px'
	},
	card: {
		marginVertical: '5px',
		padding:'5px',
		backgroundColor: 'white',
		shadowColor: '#000',
		shadowRadius: 4,
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 3 },
		elevation: 3,
		borderRadius: 5,
	},
	textStyle: {
		zIndex: 0,
		fontSize: Fonts.size.title,
		fontWeight: 'bold',
		color: Colors.white,
		padding: 0,
	},
	textBox: {
		marginVertical: '20%',
		marginHorizontal:'20%',
		
	}
};

export default HomeStyle;