import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import CheckOutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component.jsx';
import SignInPage from './pages/signIn-page/signIn-page.component.jsx';
import SignUpPage from './pages/signUp-page/signUp-page.component';
import ContactPage from './pages/contact-page/contact-page.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

import Footer from './components/footer/footer.component';

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			}

			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className='App'>
				<Router>
					<Header />
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route path='/shop' component={ShopPage} />
						<Route path='/contact' component={ContactPage} />
						<Route exact path='/checkout' component={CheckOutPage} />
						<Route
							exact
							path='/signin'
							render={() =>
								this.props.currentUser ? <Redirect to='/' /> : <SignInPage />
							}
						/>
						<Route
							exact
							path='/signup'
							render={() =>
								this.props.currentUser ? <Redirect to='/' /> : <SignUpPage />
							}
						/>
					</Switch>
					<Footer />
				</Router>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
