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
import FolkCard from './FolkCard';
import DatatablePage from './FolkDataTable';


import React, { useState, useEffect} from 'react';

function Folks()
{
    const [key, setKey] = useState('friend');


return(
<>
<Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      
    >
      <Tab eventKey="friend" title='Connected Folks'>
        <Container>
            <Row>
                <Col>
             <DatatablePage/>
                </Col>
            </Row>
        </Container>
      </Tab>
      <Tab eventKey="blocked" title='Blocked Folks'>
      <Container>
            <Row>
                <Col>
                    <DatatablePage/>
                </Col>
            </Row>
        </Container>
      </Tab>
  
    </Tabs>

</>
);

}
export default Folks;