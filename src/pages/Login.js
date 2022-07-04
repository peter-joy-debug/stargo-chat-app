import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import LoginForm from '../component/LoginForm';
import OffCanvas from '../component/OffCanvasSignup';
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser} from "@fortawesome/free-solid-svg-icons";

function Login()
{
    return(
        <Container fluid className="home">
            <Row>
            
            <Col sm={9} gstyle={{paddingLeft: '35px'}}>
            <br></br>
            <br></br>
                <Container className="middle">
                    <Row>
                        <Col sm={7}></Col>
                        <Col sm={5}>
                            <br></br>
                            <br></br>
                            <h4 style={{fontFamily:'sans-serif,hervetica,times-new-roman,monospace',textAlign:'center', color:'rgba(79, 80, 82, 0.846)'}}>Login - Stargo Chat App</h4>
                            <br></br>
                            <LoginForm/>
                        </Col>
                    </Row>
                </Container>
            </Col>
            <Col sm={3}>
                <Container>
                    <Row>
                        <Col>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <OffCanvas/>
                        </Col>
                    </Row>
                </Container>
            </Col>
            </Row>
        </Container>
    );
}

export default Login;