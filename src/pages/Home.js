import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import LeftNavbar from "../component/LeftNavbar";
import MainTabs from '../component/MainTabs';
import '../App.css';
function Home()
{
    return(
        <>
        <LeftNavbar/>
        <Container fluid style={{paddingLeft:'3%'}}>
            <Row>
                <Col sm={10}>
                    <br></br>
                    <MainTabs/>
                </Col>
                <Col sm={2}>
                    <br></br>
                    <h3>Side</h3>
                </Col>
            </Row>
        </Container>
        </>
    );

}

export default Home;