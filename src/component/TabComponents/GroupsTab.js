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
import { faEdit, faGraduationCap, faInfoCircle, faKitchenSet, faLocation, faLocationArrow, faLocationPin, faLocationPinLock, faMessage, faSearch, faStream, faTowerBroadcast, faUser, faUserPlus, faUsersViewfinder, faVideoCamera,faUserGroup} from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faFacebook,faInstagram,faYoutube,faPinterest} from "@fortawesome/free-brands-svg-icons";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { useState } from 'react';
import FolkCard from './FolkCard';
import DatatablePage from './FolkDataTable';
import Offcanvas from 'react-bootstrap/Offcanvas';

function GroupsTab()
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
      <Tab eventKey="friend" title={<FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>}>
        <Container>
            <Row>
                <Col>
               
                </Col>
            </Row>
        </Container>
      </Tab>
      <Tab eventKey="joined" title='Joined Group'>
      <Container>
            <Row>
                <Col>
                   
                </Col>
            </Row>
        </Container>
      </Tab>

      <Tab eventKey="create" title='Create Group'>
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
export default GroupsTab;