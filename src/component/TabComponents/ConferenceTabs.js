import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import User from '../../images/users/download.png';
import Cover from '../../images/cover/anastase-maragos-rtsvifRfBJk-unsplash.jpg';
import { FloatingLabel, Form, ListGroup } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faGraduationCap, faInfoCircle, faKitchenSet, faLocation, faLocationArrow, faLocationPin, faLocationPinLock, faMessage, faSearch, faStream, faTowerBroadcast, faUser, faUserPlus, faUsersViewfinder, faVideoCamera} from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faFacebook,faInstagram,faYoutube,faPinterest} from "@fortawesome/free-brands-svg-icons";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { useState } from 'react';
import FolkCard from './FolkCard';
import DatatablePage from './FolkDataTable';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CreatedCard from './CreatedMeetingCard';
function ConferanceTab()
{
    const [key, setKey] = useState('friend');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

return(
<>
<Container>
    <Row>
        <Col>
        <Button variant='info' onClick={handleShow} ><FontAwesomeIcon icon={faTowerBroadcast}/> Create Conferance</Button>
        </Col>

        <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Conferance Creation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form>
        <FloatingLabel
            controlId="floatingInput"
            label="Your name"
            className="mb-2"
        >
        <Form.Control type="text"/>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label=""
        className="mb-2"
      >
          <textarea placeholder="Meeting Description">

          </textarea>
        {/* <Form.Control type="textarea" placeholder="Meeting Description" /> */}
      </FloatingLabel>
      <br/>
      <Button variant="dark" type="submit" href="/Conference">
        Start Conferance
      </Button>
      
      </Form>
        </Offcanvas.Body>
        </Offcanvas>

        <Col>
        <Button variant='warning' href="/Conference"><FontAwesomeIcon icon={faTowerBroadcast}/> Instant Conferance</Button>
        </Col>
    </Row>
    <br></br>
    <Row>
        <Col>
        <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      
    >
      <Tab eventKey="friend" title='Created Meetings'>
        <Container style={{height:'406px',overflow:'auto'}}>
            <Row>
                <Col>
                    <CreatedCard/>
                    <CreatedCard/>
                    <CreatedCard/>
                    <CreatedCard/>
                    <CreatedCard/>
                    <CreatedCard/>
                    <CreatedCard/>
                    <CreatedCard/>
                </Col>
            </Row>
        </Container>
      </Tab>
      <Tab eventKey="blocked" title='Attended Meetings' >
      <Container style={{backgroundColor:'whitesmoke',height:'406px',overflow:'auto'}}>
         
            <Row>
                <Col>
                    <CreatedCard/>
                    <CreatedCard/>
                    <CreatedCard/>
                    <CreatedCard/>
                    <CreatedCard/>
                    <CreatedCard/>
                    <CreatedCard/>
                    <CreatedCard/>
                </Col>
            </Row>
        </Container>
      </Tab>
  
    </Tabs>
        </Col>
    </Row>
</Container>


</>
);

}
export default ConferanceTab;