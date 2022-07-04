import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faTwitter,faFacebook,faInstagram,faYoutube,faPinterest} from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function LoginForm() {
  return (
    <>
    <Form>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel><br/>
      <Button variant="outline-dark" type="submit">
        Login
      </Button>
      &nbsp;&nbsp;&nbsp;<br></br><br></br>
      <Link style={{color:'white',backgroundColor:'rgba(79, 80, 82, 0.846)',padding:'2.5%',borderTopLeftRadius:'50px',borderBottomRightRadius:'50px'}}>Forget Password ?</Link>
      </Form>
    </>
  );
}

export default LoginForm;