import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from './component/LoginForm';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUpForm from './component/SignUpForm';
import Conference from "./pages/Conference";



function App() {

  return (
    <Router>
       <Switch>
        <Route exact path="/" >
          <Login />
        </Route>
        <Route exact path="/Home" >
          <Home />
        </Route>
        <Route exact path="/Conference" >
          <Conference />
        </Route>
       </Switch>
    </Router>
  );
}

export default App;
