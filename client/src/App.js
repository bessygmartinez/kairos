import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./Actions/authActions";

import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import PrivateRoute from "./components/Private-Route/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";

import { Provider } from "react-redux";
import store from "./store";
import ViewAccounts from "./pages/ViewAccounts";

//Check for token to keep user logged in
if (localStorage.jwtToken) {
  //Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  //Decode token and get user info and exp
  const decoded = jwt_decode(token);
  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //Check for expire token
  const currentTime = Date.now() / 1000; //to get in milliseconds
  if (decoded.exp < currentTime) {
    //Logout user
    store.dispatch(logoutUser());

    //Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <Router>
            <Nav />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/register" component={Register} />
              <PrivateRoute exact path="/viewaccounts" component={ViewAccounts} />
            </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;


