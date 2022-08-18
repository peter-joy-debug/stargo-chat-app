import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import User from '../../images/users/download.png';
import Cover from '../../images/cover/intricate-explorer-h7L-SRej-sw-unsplash.jpg';
import { Dropdown, DropdownButton, Form, FormControl, ListGroup, Modal, Offcanvas } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faInfoCircle, faMessage, faSearch, faUserPlus, faUsersViewfinder, faVideoCamera, faPhotoFilm, faImage, faImagePortrait, faLocationArrow, faUser, faMaximize, faVenus, faMars, faAddressBook} from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faFacebook,faInstagram,faYoutube,faPinterest, faGoogle} from "@fortawesome/free-brands-svg-icons";
import ProfileInfo from './ProfileInfos';
import SingleVideoCall from './SingleVideoCall';
import '../../App.css';
import { useState } from 'react';
import SimpleFolkCard from './SimpleFolkCard';
function OtherMessageCard()
{
return(

<>

         
                <Card style={{ width: '80%',padding:'2px', borderTopLeftRadius:'12px',borderTopRightRadius:'12px'}} className='back-two'>
                    <Container>
                        <Row>
                            <Col sm={12}>
                            
                            <span> here it is my message,ssh is the protocol being used for checking authentication</span>
                            <br></br>
                            <span style={{fontSize:'11px',marginBottom:'20px',padding:'1%',backgroundColor:'black',color:'whitesmoke',borderRadius:'5px'}} className="back-three"> 12:00 | Sent by Peter</span>
                            </Col>
                      
                       
                        </Row>
                    </Container>
                </Card>
               <br></br>
               
    
</>
);

}
export default OtherMessageCard;