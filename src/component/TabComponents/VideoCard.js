import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import User from '../../images/users/download.png';
import { Container, Modal } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatBox from './ChatBox';
import { faArrowCircleRight, faClose, faDoorOpen, faInfoCircle, faMaximize, faMessage, faMicrophone, faMinimize, faRecordVinyl, faSearch, faTimesSquare, faUserPlus, faUsersViewfinder, faVideo, faVideoCamera, faWindowMaximize} from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faFacebook,faInstagram,faYoutube,faPinterest} from "@fortawesome/free-brands-svg-icons";
import SingleVideoCall from './SingleVideoCall';
function VideoCard()
{   
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
return(
<>
<Card style={{ width: '99%',height:'200px',padding:'5px', borderRadius:'7px',backgroundColor:'black',margin:'4%'}} className='back-two' onClick={handleShow}>
    <Container>
        <Row style={{height:'145px',color:'white'}}>
            <Col>
            <span style={{color:'white',padding:'1%',borderRadius:'7%'}} className='back-two'>Peter Joy</span>
         
            </Col>
        </Row>
        <Row>
            <Col>
            <Button variant='success'><FontAwesomeIcon icon={faMaximize}/></Button> <Button variant='light' disabled><FontAwesomeIcon icon={faVideo}/></Button> <Button variant='light' disabled><FontAwesomeIcon icon={faMicrophone}/></Button> 
            </Col>
        </Row>
    </Container> 
</Card>
<Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton style={{backgroundColor:'lightgrey'}}>
          <p style={{textAlign:'center'}}>Peter Joy</p>
        </Modal.Header>
        <Modal.Body style={{padding:'1%',backgroundColor:'lightgrey'}}>
          <div style={{height:'480px',backgroundColor:'black',borderRadius:'10px'}}>

          </div>
        </Modal.Body>
      </Modal>
</>
);

}
export default VideoCard;