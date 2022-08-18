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

function SettingTab()
{
    const [key, setKey] = useState('friend');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

return(
<>
<Container>
    <Row>
        
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
      <Tab eventKey="friend" title='Change Password'>
        <Container>
            <Row>
                <Col>
                <Form>
                    <FloatingLabel controlId="floatingPassword" label="Current password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <br/>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <br/>
                    <FloatingLabel controlId="floatingPassword" label="Re-type Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <br/>
                    <Button variant="info" type="submit">
                        Change Password
                    </Button>
                
                </Form>
                </Col>
            </Row>
        </Container>
      </Tab>
      <Tab eventKey="blocked" title='Configurations'>
      <Container>
            <Row>
                <Col>
                   
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
export default SettingTab;