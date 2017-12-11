import React, { Component } from "react";
import { Route } from "react-router-dom";
import UserProfile from "./UserProfile";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={MainLanding} />
        <Route path="/users/:id" component={UserProfile} />
      </div>
    );
  }
}

const MainLanding = () => {
  return <div>Main Landing Page</div>;
};

export default App;
