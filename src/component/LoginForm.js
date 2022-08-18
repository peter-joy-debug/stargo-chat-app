import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faTwitter,faFacebook,faInstagram,faYoutube,faPinterest} from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import { adminLogin, login } from "../redux/actions/AuthenticationAction";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";


// function LoginForm() {
  const LoginForm = () => {
    const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const [userType, setUserType] = useState(false);
  const { email, password } = userData;

  const [typePass, setTypePass] = useState(false);

  // const { auth } = useSelector((state) => state);

  // const dispatch = useDispatch();
  // const history = useHistory();

  // useEffect(() => {
  //   if (auth.token) history.push("/");
  // }, [auth.token, history]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!userType) {
  //     dispatch(login(userData));
  //   } else {
  //     dispatch(adminLogin(userData));
  //   }
  // };
  return (
    <>
    <Form>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" id="exampleInputEmail1"  onChange={handleChangeInput} value={email} name="email"/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control placeholder="Password"  type={typePass ? "text" : "password"} id="exampleInputPassword1" onChange={handleChangeInput} value={password} name="password"/>
      </FloatingLabel>
      <small onClick={() => setTypePass(!typePass)}>
                {typePass ? "Hide" : "Show"}
      </small>
      <br></br><br></br>
      <FloatingLabel
        controlId="floatingInput"
        label=""
        className="mb-3"
      >
        <Container>
        <Row>
          <Col>
          <label htmlFor="User">
            User &nbsp;
             <input
              type="radio"
              id="User"
              name="gender"
              value={userType}
              defaultChecked
              onClick={() => setUserType(false)}
            />
          </label>
          </Col>
          <Col>
          <label htmlFor="User">
            Admin &nbsp;
             <input
              type="radio"
              id="Admin"
              name="gender"
              value={userType}
              defaultChecked
              onClick={() => setUserType(true)}
            />
            </label>
            </Col>
        </Row>
        </Container>
            

          
          
      </FloatingLabel>

      <Button variant="primary" type="submit" disabled={email && password ? false : true} href="/Home">
        Login
      </Button>
      &nbsp;&nbsp;&nbsp;<br></br><br></br>
      <Link style={{color:'white',backgroundColor:'rgba(79, 80, 82, 0.846)',padding:'2.5%',borderTopLeftRadius:'50px',borderBottomRightRadius:'50px'}}>Forget Password ?</Link>
      </Form>
    </>
  );
}

export default LoginForm;