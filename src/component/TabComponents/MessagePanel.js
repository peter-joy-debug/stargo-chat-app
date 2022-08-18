import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import User from '../../images/users/download.png';
import Cover from '../../images/cover/anastase-maragos-rtsvifRfBJk-unsplash.jpg';
import { ListGroup } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faGraduationCap, faInfoCircle, faKitchenSet, faLocation, faLocationArrow, faLocationPin, faLocationPinLock, faMessage, faSearch, faUser, faUserPlus, faUsersViewfinder, faVideoCamera} from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faFacebook,faInstagram,faYoutube,faPinterest} from "@fortawesome/free-brands-svg-icons";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { useState } from 'react';
import FolkCard from './FolkCard';
import MessageData from './MessageDataTable';
import GroupCardData from './GroupCardData';

function MessagePanel()
{
    const [key, setKey] = useState('personal');
return(
<>
<Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      
    >
      <Tab eventKey="personal" title='Folk Message'>
        <Container style={{height:'430px',overflow:'auto'}}>
            <Row>
                
                <Col>
                    <MessageData/>
                </Col>
            </Row>
        </Container>
      </Tab>
      <Tab eventKey="group" title='Group Message'>
      <Container style={{height:'430px',overflow:'auto'}}>
            <Row>
                <Col>
                    <GroupCardData/>
                </Col>
            </Row>
        </Container>
      </Tab>
  
    </Tabs>

</>
);

}
export default MessagePanel;