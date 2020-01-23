import {  Fonts, Colors } from 'styles/';

const HomeImage = require('assets/001 - Home/foto-blog-1.png');

const BlogBoxStyle = {
	card: {
		//backgroundColor: '#067CF7',
		backgroundImage: `url(${HomeImage})`,
		backgroundSize: 'cover',
		shadowColor: '#000',
		shadowRadius: 4,
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 3 },
		elevation: 3,
		position: 'absolute',
		width: '400px',
		height: '500px',
		borderRadius: 5,
	},
	cardTwo: {
		marginLeft:'450px',
		//backgroundColor: '#067CF7',
		backgroundImage: `url(${HomeImage})`,
		backgroundSize: 'cover',
		shadowColor: '#000',
		shadowRadius: 4,
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 3 },
		elevation: 3,
		position: 'absolute',
		width: '400px',
		height: '500px',
		borderRadius: 5,
	},
	label:{
		bottom: "0%",
		backgroundColor: "#067CF7",
		width: '100%',
		height: '250px',
		position: 'absolute',
		opacity: 0.7,
		zIndex: 2
	},
	header:{
		zIndex: -99,
		fontSize: Fonts.size.title,
		fontWeight: 'bold',
		color: Colors.white,
		paddingLeft: '10px',
	},
	dateText:{
		zIndex: -99,
		fontSize: Fonts.size.label,
		fontWeight: 'regular',
		color: Colors.white,
		paddingLeft: '10px',
	},
	bodyText:{
		zIndex: -99,
		fontSize: Fonts.size.body,
		fontWeight: 'regular',
		color: Colors.white,
		paddingLeft: '10px',
	}
};

export default BlogBoxStyle;