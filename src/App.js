import React, { Component } from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import SignInUp from './pages/sign-in-out/sign-in-up.component';
import { auth, storeUserInFirestore } from "./firebase/firebase.utils";
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkoutpage.component';


class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuthObj) => {
      /* User unauthenticated */
      if (!userAuthObj) return setCurrentUser(null);

      /* User Authenticated */
      // Ensure the user data is stored in Firestore DB
      const userRef = await storeUserInFirestore(userAuthObj);
      // Update the App state accordingly
      userRef.onSnapshot(user => {
        setCurrentUser({
          id: user.id,
          ...user.data()
        });
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/sign-in" render={
            () => currentUser ?
              <Redirect to="/" />
              : <SignInUp />
          }
          />
        </Switch>
      </div >
    );
  }
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);