import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInUp from './pages/sign-in-out/sign-in-up.component';
import { auth, storeUserInFirestore } from "./firebase/firebase.utils";


class App extends Component {
  state = {
    currentUser: null
  };
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuthObj) => {
      /* User unauthenticated */
      if (!userAuthObj) return this.setState({
        currentUser: null
      });

      /* User Authenticated */
      // Ensure the user data is stored in Firestore DB
      const userRef = await storeUserInFirestore(userAuthObj);
      // Update the App state accordingly
      userRef.onSnapshot(user => {
        this.setState({
          currentUser: {
            id: user.id,
            ...user.data()
          }
        });
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign-in" component={SignInUp} />
        </Switch>
      </div >
    );
  }
}

export default App;