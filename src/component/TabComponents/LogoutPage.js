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
import { useHistory} from "react-router-dom";
import { logout } from "../../redux/actions/AuthenticationAction";
import { useSelector, useDispatch } from "react-redux";

function LogoutPage()
{
    const [key, setKey] = useState('friend');
  

return(
<>
<Container>
    <Row>
        <Button variant='danger' style={{width:'40%'}} href="/">Logout</Button>
    </Row>
    <Row>
        <Col>
        
        </Col>
    </Row>
</Container>


</>
);

}
export default LogoutPage;