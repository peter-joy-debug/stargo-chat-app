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
import React, { useState, useEffect} from 'react';


const ProfileInfo = () =>
{
    const [key, setKey] = useState('personal');
return(
<>

<Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      variant='pills'
    >
      <Tab eventKey="personal" title={<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>} variant='pills'>
        <ListGroup className="list-group-flush">

         <ListGroup.Item>Honore Ndayishimiye</ListGroup.Item>
        <ListGroup.Item>ndayishimiyehonore777@gmail.com</ListGroup.Item>
        <ListGroup.Item>+250780258266</ListGroup.Item>
        </ListGroup>
      </Tab>
      <Tab eventKey="address" title={<FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>}>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Rwanda</ListGroup.Item>
        <ListGroup.Item>Kigali</ListGroup.Item>
        <ListGroup.Item>KN-12 -A</ListGroup.Item>
        </ListGroup>
      </Tab>
      <Tab eventKey="education" title={<FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>}>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Carnegie Mellon University</ListGroup.Item>
        <ListGroup.Item>University of Rwanda</ListGroup.Item>
        <ListGroup.Item>Riviera High School</ListGroup.Item>
        </ListGroup>
      </Tab>
  
    </Tabs>

</>
);

}
export default ProfileInfo;