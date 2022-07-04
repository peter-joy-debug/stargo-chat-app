import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faTwitter,faFacebook,faInstagram,faYoutube,faPinterest} from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignUpForm() {
  return (
    <>
    <Form>
      <FloatingLabel
        controlId="floatingInput"
        label="Fullname"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Peter" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>

      <FloatingLabel
          controlId="floatingSelectGrid"
          label="Gender"
        >
          <Form.Select aria-label="Select you gender">
            <option>Select you gender</option>
            <option value="1">Male</option>
            <option value="1">Female</option>
          </Form.Select>
        </FloatingLabel>
        <br/>

      <FloatingLabel
        controlId="floatingInput"
        label="Username"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Peter" />
      </FloatingLabel>


      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <br/>
      <FloatingLabel controlId="floatingPassword" label="Re-type Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <br/>
      <Button variant="dark" type="submit">
        Sign Up
      </Button>
      
      </Form>
    </>
  );
}

export default SignUpForm;