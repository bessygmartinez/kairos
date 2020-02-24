import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";

import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
// import NoMatch from "./pages/NoMatch";

import { Provider } from "react-redux";
import store from "./store";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
        <Nav />
          <Route exact path="/" component={Landing} />
          {/* <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route exact path="/landing" component={Landing} /> */}
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {/* <Route component={NoMatch} /> */}
      </div>
    </Router>
    </Provider>
    )
  }
}

export default App;
