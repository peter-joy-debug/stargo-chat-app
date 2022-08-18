import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import LeftNavbar from "../component/LeftNavbar";
import MainTabs from '../component/MainTabs';
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationPin, faMobileAndroidAlt, faPhone, faTeletype, faTowerBroadcast, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faConnectdevelop, faLinkedin, faModx } from "@fortawesome/free-brands-svg-icons";
import Overlay from 'react-bootstrap/Overlay';
import { Offcanvas } from 'react-bootstrap';
import GroupsTab from '../component/TabComponents/GroupsTab';
import Dev from '../images/users/dev-2.jpg';

function Home()
{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Developer

    const [showDev, setShowDev] = useState(false);

    const handleCloseDev = () => setShowDev(false);
    const handleShowDev = () => setShowDev(true);

    return(
        <>
        <LeftNavbar/>
        <Container fluid style={{paddingLeft:'3%'}}>
            <Row>
                <Col sm={9}>
                    <br></br>
                    <MainTabs/>
                </Col>
                <Col sm={3}>
                    <br></br>

                    <Button variant='bark' onClick={handleShow}><FontAwesomeIcon icon={faUsers}/> Groups</Button>

                    <Offcanvas show={show} onHide={handleClose} placement='end' responsive='lg'>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>About Groups</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <GroupsTab/>
                    </Offcanvas.Body>
                    </Offcanvas>

                    <br></br>
                    <Button variant='bark' className="back-two" href='/Conference'><FontAwesomeIcon icon={faTowerBroadcast}/> Instant Meeting</Button>
                    <br></br>
                    <Button variant='bark' className="back-two"><FontAwesomeIcon icon={faMobileAndroidAlt}/> Get Mobile App</Button>
                    <br></br>
                    <Button variant='bark' className="back-two" onClick={handleShowDev}><FontAwesomeIcon icon={faConnectdevelop} /> About Developer</Button>

                    <Offcanvas show={showDev} onHide={handleCloseDev} placement='end' responsive='lg'>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Developer</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Container>
                        <Row>
                            <Col>
                            <img src={Dev} height='20%' className='back'/>
                            <br></br>
                            <br></br>
                            <h5>Honore Peter Joy Ndayishimiye</h5>
                            <p><FontAwesomeIcon icon={faConnectdevelop}/> Software Engineer / Cybersec</p>
                            <p><FontAwesomeIcon icon={faLocationPin}/> Rwanda - Kigali</p>
                            <hr/>
                            <h5>About</h5>
                            <hr/>
                            <p style={{textAlign:'justify'}}><FontAwesomeIcon icon={faTeletype}/> I am an MSIT student at Carnegie Mellon University pursuing Software Engineering. I consider myself to be an enthusiastic hardworking person, I believe that the output of an activity depends on the effort applied on that activity. Professionally, Experienced Software Engineer with a track record of success in the software development industry. Skilled in PHP, Python (Flask), Java, Restful APIs, JavaScript, jQuery, JSON, and other technologies. Additionally, I'm self motivated Information Security Engineer in the field of Cybersecurity. Lastly, I like to work in team as Henry Ford said that "If everyone is moving forward together, then success take care of itself".</p>
                            <h5>Contact</h5>
                            <hr/>
                            <a mailTo='ndayishimiyehonore777@gmail'><p><FontAwesomeIcon icon={faEnvelope}/> ndayishimiyehonore777@gmail</p></a>
                            <a href='https://www.linkedin.com/in/honore-4792bb125/'><p><FontAwesomeIcon icon={faLinkedin}/> Honore Ndayishimiye - Linkedin</p></a>
                            <p><FontAwesomeIcon icon={faPhone}/> +250-780-258-266</p>
                            </Col>
                            
                        
                        </Row>
                    </Container>
                    </Offcanvas.Body>
                    </Offcanvas>

                  
                    
                </Col>
            </Row>
        </Container>
       
        </>
    );

}

export default Home;