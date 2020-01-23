import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styles from 'screens/HomeScreen/HomeStyle';
//Screens' Imports
import BlogsScreen from 'screens/BlogsScreen/BlogsScreen';
import ContactScreen from 'screens/ContactScreen/ContactScreen';
import SolutionsScreen from 'screens/SolutionsScreen/SolutionsScreen';
import WelcomeScreen from 'screens/WelcomeScreen/WelcomeScreen';
//Components' Imports
import HeaderMenu from 'components/HeaderMenu/HeaderMenu';
import logo from 'assets/logo-dinkbit.png';

class Home extends Component {
	render() {
		return (
			<Router>
				<div>
					<header style={{size: '10%'}}>
						<HeaderMenu />
					</header>
					<div style={styles.topBar}>
						<nav style={styles.navBar}>
							<div>
								<Link to={'/'} className="nav-link"> 
									<img src={logo} style={{width: '120px'}} alt="logo" />
								</Link>
							</div>
							<div style={styles.middleBar}>
								<div style={styles.textBox}>
									<Link to={'/solutions'} className="nav-link">
										<p style={styles.textStyle}>
											Soluciones
										</p>
									</Link>
								</div>
								<div style={styles.textBox}>
									<Link to={'/blogs'} className="nav-link">
										<p style={styles.textStyle}>
											Blogs
										</p>
									</Link>
								</div>
								<div style={styles.textBox}>
									<Link to={'/contact'} className="nav-link">
										<p style={styles.textStyle}>
											Contacto
										</p>
									</Link>
								</div>
							</div>
						</nav>
					</div>
					<div style={{top: '300px'}}>
						<hr />
						<Switch>
							<Route exact path='/' component={WelcomeScreen} />
							<Route path='/solutions' component={SolutionsScreen} />
							<Route path='/blogs' component={BlogsScreen} />
							<Route path='/contact' component={ContactScreen} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default Home;