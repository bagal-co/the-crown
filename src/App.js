import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from './pages/signIn-signUp/signIn-signUp.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null
    }

  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            }
          })
        });
      }else{
        this.setState({currentUser: userAuth})
      }
    });
  };

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return(
      <div className="container">
        <Router>
        <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/signIn' component={SignInAndSignUp}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
