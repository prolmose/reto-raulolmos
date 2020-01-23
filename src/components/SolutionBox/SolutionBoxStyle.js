import {  Fonts, Colors } from 'styles/';



const BlogBoxStyle = {
	label:{
		top: 0,
		backgroundColor: "#067CF7",
		width: '100%',
		height: '100%',
		opacity: 0.7,
		zIndex: 2,
		display:'flex',
		justifyContent: 'center',
		alignItems:'center'
	},
	header:{
		zIndex: -99,
		fontSize: Fonts.size.title,
		fontWeight: 'bold',
		color: Colors.white,
		paddingLeft: '10px',
	},
	titleText:{
		zIndex: -99,
		fontSize: Fonts.size.big,
		fontWeight: 'bold',
		color: Colors.white,
		paddingTop: 0,
		paddingBottom: 0,
		paddingRight:0,
		paddingLeft: "20px"
	},
	bodyText:{
		zIndex: -99,
		fontSize: Fonts.size.big,
		fontWeight: 'bold',
		color: Colors.white,
		padding: 0,
	}
};

export default BlogBoxStyle;