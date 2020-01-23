const HomeImage = require('assets/001 - Home/slider-1.jpg');
const { innerWidth: width, innerHeight: height } = window;


const WelcomeScreenStyle = {
	screen: {
		 width: '100%',
		 height: '800px',
		 backgroundImage: `url(${HomeImage})`,
		 backgroundSize: 'cover',
	},
	topBar: {
		position: "fixed",
		top: '200px',
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		width: width > 480 ? '100%': '60%',
		height: height > 768 ? '5%' : '15%',
		backgroundColor: '#067CF7',
		borderBottom: 'white',
		fontWeight: "bold",
		padding: "0px 20px",
		opacity: 0.5,
		boxSizing: "border-box"
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
		marginVertical: '500px',
		padding:'5px',
		top: '300px',
		backgroundColor: '#067CF7',
		shadowColor: '#000',
		shadowRadius: 4,
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 3 },
		elevation: 3,
		position: 'fixed',
		borderRadius: 5,
	},
};

export default WelcomeScreenStyle;