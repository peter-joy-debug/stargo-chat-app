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
import { faAdd, faClose, faClosedCaptioning, faCog,faCopy, faCogs, faMessage, faMicrophone, faMobileAndroidAlt, faPeopleCarry, faPeopleGroup, faRecordVinyl, faTowerBroadcast, faUser, faUsers, faVideo, faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { faConnectdevelop, faModx, faViadeo } from "@fortawesome/free-brands-svg-icons";
import Overlay from 'react-bootstrap/Overlay';
import { Offcanvas } from 'react-bootstrap';
import GroupsTab from '../component/TabComponents/GroupsTab';
import VideoCard from '../component/TabComponents/VideoCard';
import ConferenceChatBot from '../component/TabComponents/ConferenceChatBox';
import ConferenceUser from '../component/TabComponents/ConferenceUser';
import { Dropdown } from 'react-bootstrap';

function Conference()
{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [showa, setShowa] = useState(false);

    const handleClosea = () => setShowa(false);
    const handleShowa = () => setShowa(true);

    return(
        <>
        <LeftNavbar/>
        <Container fluid style={{paddingLeft:'2%'}}>
            <br></br>
            <Row>
                <Col sm={10} style={{height:'470px',overflow:'auto'}}>
                    {/* <MainTabs/> */}
                    <Row>
                        <Col sm={3}>
                            <VideoCard/>
                        </Col>
                        <Col sm={3}>
                            <VideoCard/>
                        </Col>
                        <Col sm={3}>
                            <VideoCard/>
                        </Col>
                        <Col sm={3}>
                            <VideoCard/>
                        </Col>
                        <Col sm={3}>
                            <VideoCard/>
                        </Col>
                        <Col sm={3}>
                            <VideoCard/>
                        </Col>
                        <Col sm={3}>
                            <VideoCard/>
                        </Col>
                        <Col sm={3}>
                            <VideoCard/>
                        </Col>
                        
                    </Row>
                    <br></br>
                   
                </Col>
                <Col sm={2}>
                    <br></br>
                    <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="info">
        <FontAwesomeIcon icon={faAdd}/> Invite
        </Dropdown.Toggle>

        <Dropdown.Menu variant="black" style={{backgroundColor:'gray'}} className='back-two'>
          <Dropdown.Item href="#/action-1">
          <Dropdown.Divider/>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" active disabled style={{color:'white'}}>http://localhost:4200/home/stock/ <Button variant='info'><FontAwesomeIcon icon={faCopy}/></Button><br></br><br></br>
          <p>Use this link to invite others</p>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-1">
          <Dropdown.Divider/>
          </Dropdown.Item>
          

        </Dropdown.Menu>
      </Dropdown>
                    <br></br>
                    <Button variant='bark' onClick={handleShow}><FontAwesomeIcon icon={faMessage}/> Live Chat</Button>

                    <Offcanvas show={show} onHide={handleClose} placement='end' responsive='lg'>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Chat</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <ConferenceChatBot/>
                    </Offcanvas.Body>
                    </Offcanvas>

                    <br></br>
                    <Button variant='bark' onClick={handleShowa}><FontAwesomeIcon icon={faUsers}/> Participant</Button>

                    <Offcanvas show={showa} onHide={handleClosea} placement='end' responsive='lg'>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Participant</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body style={{height:'100px',overflow:'auto'}}>
                    <ConferenceUser/>
                    <ConferenceUser/>
                    <ConferenceUser/>
                    <ConferenceUser/>

                    </Offcanvas.Body>
                    </Offcanvas>
                    <br></br>
                    <Button variant='bark'><FontAwesomeIcon icon={faCog} disabled/> Settings</Button>
                    <br></br>
                    <br></br>
                  
                    
                </Col>
            </Row>
            <Row style={{textAlign:'center',backgroundColor:'whitesmoke',width:'100%',marginRight:'-12px',borderRadius:'12px'}} className='back-two'>
                <Col>
                    <Button variant='primary' className="back-two"><FontAwesomeIcon icon={faVideo}/> Video</Button> <Button variant='success' className="back-two"><FontAwesomeIcon icon={faMicrophone}/>Mic</Button><Button variant='orange' className="back-two"><FontAwesomeIcon icon={faRecordVinyl}/>Rec</Button><Button variant='danger' className="back-two" href='/Home'><FontAwesomeIcon icon={faClose}/> End</Button>
                </Col>
            </Row>
            <br></br>
            
        </Container>
       
        </>
    );

}

export default Conference;