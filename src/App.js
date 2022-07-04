import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from './component/LoginForm';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUpForm from './component/SignUpForm';


function App() {
  return (
    <Router>
      <Home/>
       <Switch>

       </Switch>
    </Router>
  );
}

export default App;
