import {  Fonts, Colors } from 'styles/';

const { innerWidth: width, innerHeight: height } = window;

const HeaderMenuStyle = {
	topBarStyle: {
	    position: "fixed",
	    top: 0,
	    display: "flex",
	    justifyContent: "space-between",
	    alignItems: "center",
	    width: width > 480 ? '100%': '60%',
	    height: height > 768 ? '10%' : '5%',
	    backgroundColor: '#067CF7',
	    borderBottom: 'white',
	    fontWeight: "bold",
	    padding: "0px 20px",
	    boxSizing: "border-box"
  },
  textStyle: {
		fontSize: Fonts.size.body,
		color: Colors.white,
		fontWeight: Fonts.weight.bold,
		margin: 0,
		padding: 0
	},

};

export default HeaderMenuStyle;