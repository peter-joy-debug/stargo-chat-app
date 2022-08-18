import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faTwitter,faFacebook,faInstagram,faYoutube,faPinterest} from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import { useDispatch, useSelector } from "react-redux";
import { useHistory} from "react-router-dom";
import { register } from '../redux/actions/AuthenticationAction';

// function SignUpForm() {

  const SignUpForm = () => {


  return (
    <>
    <Form>
      <FloatingLabel
        controlId="floatingInput"
        label="Firstname"
        className="mb-3"
      >
        <Form.Control type="text" id="firstname" placeholder="Peter"  name="firstname" />
      </FloatingLabel>
      <small className="form-text text-danger">
      </small>

      <FloatingLabel
        controlId="floatingInput"
        label="Lastname"
        className="mb-3"
      >
        <Form.Control type="text" id='lastname' placeholder="Keza"  name="lastname" />
      </FloatingLabel>

      <small className="form-text text-danger">
              
      </small>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" id='email' placeholder="name@example.com" name="email" />
      </FloatingLabel>
      <small className="form-text text-danger">
              
      </small>
      <FloatingLabel
          controlId="floatingSelectGrid"
          label="Gender"
        >
          <Form.Select aria-label="Select you gender" name="gender">
            <option>Select you gender</option>
            <option value="male" name="gender" id="male">Male</option>
            <option  value="female" name="gender" id="female">Female</option>
          </Form.Select>
        </FloatingLabel>
        <br/>

      <FloatingLabel
        controlId="floatingInput"
        label="Phone Number"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="+250-56767-87" id="phone"   name="phone" />
      </FloatingLabel>

      <small className="form-text text-danger">
              
      </small>


      <FloatingLabel
        controlId="floatingInput"
        label="Username"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Keza" id="username"   name="username" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" id="password"  name="password" />

      </FloatingLabel>

      <small className="form-text text-danger">
            
      </small>
      <br/>
      <FloatingLabel controlId="floatingPassword" label="Re-type Password">
        <Form.Control  type="password" placeholder="Password" id="cf_password"  name="cf_password" />
 
      </FloatingLabel>

      <small className="form-text text-danger">
             
      </small>


      <br/>
      <Button variant="dark" type="submit">
        Sign Up
      </Button>
      
      </Form>
    </>
  );
}

export default SignUpForm;