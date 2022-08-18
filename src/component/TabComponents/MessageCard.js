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
function MessageCard()
{   
    const [showa, setShowa] = useState(false);

    const handleClosea = () => setShowa(false);
    const handleShowa = () => setShowa(true);

      const renderTooltipAdd = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Switch to Chat Box
        </Tooltip>
      );


      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  
      const values = [true];
      const [fullscreen, setFullscreen] = useState(true);
      const [showModel, setShowModel] = useState(false);

      const renderTooltipVideo = (props) => (
        <Tooltip id="button-tooltip" {...props}>
         Minimize
        </Tooltip>
      );

      const renderTooltipMaxi = (props) => (
        <Tooltip id="button-tooltip" {...props}>
         Miximize
        </Tooltip>
      );

      const renderTooltipMicrophone = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Switch to chat
        </Tooltip>
      );
    
      function handleShowModel(breakpoint) {
        setFullscreen(breakpoint);
        setShowModel(true);
        setShow(false);
        setShowa(false);
      }

      function handleCloseModel() {
        
        setShowModel(false);
        setShow(false);
        setShowa(true);
      }
      function handleCloseModelChat() {
        
        setShowModel(false);
        setShow(true);
        setShowa(false);
      }
 
      function switchChatVideo() {
        setShow(false);
        setShowa(true);
      }
      function switchVideoChat() {
        setShow(true);
        setShowa(false);
      }
return(
<>
<Card style={{ width: '80%',padding:'5px', borderRadius:'50px' }} className='back-two'>
    <Container>
        <Row>
            <Col sm={2}><Card.Img variant="top" src={User} style={{height:'30px',width:'30px',marginTop:'-20px',borderRadius:'30px'}} className="back-two"/>
            <p style={{padding:'2%',backgroundColor:'green',width:'10%',height:'6px',borderRadius:'100px',marginLeft:'30px',marginTop:'-9px'}} className='back'></p>
            <span style={{fontSize:'11px'}}>Peter Joy </span>
            </Col>
            <Col sm={9}>
                
             <span style={{borderBottomLeftRadius:'12px',padding:'2%',fontSize:'14px',fontFamily:'Times new roman,monospace,serif,sans serif'}} className="">Hello, Brother you are welcom in the word of programmers, to day</span><span style={{fontSize:'11px'}} className='back-three'> | 12:00</span>
            </Col>
            <Col sm={1}>

                <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipAdd}
                >
                <Button variant="indigo"style={{}} className='back' onClick={handleShow}> <span style={{fontSize:'20px',color:'white'}}><FontAwesomeIcon icon={faMessage}/></span> </Button>
                </OverlayTrigger>



                <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Chat | Stargo</Offcanvas.Title>
                <Button variant="dark"style={{height:'40px',width:'40px'}} className='back' onClick={switchChatVideo}> <span style={{fontSize:'10x',color:'white'}}><FontAwesomeIcon icon={faVideoCamera}/></span> </Button>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ChatBox/>
                </Offcanvas.Body>
                </Offcanvas>



            </Col>
        </Row>

        <Offcanvas show={showa} onHide={handleClosea} placement='end'>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>Video Call | Stargo</Offcanvas.Title><Button variant="dark"style={{height:'40px',width:'40px'}} className='back' onClick={switchVideoChat}> <span style={{fontSize:'10x',color:'white'}}><FontAwesomeIcon icon={faMessage}/></span> </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SingleVideoCall/>
         
          {values.map((v, idx) => (
         <OverlayTrigger
         placement="bottom"
         delay={{ show: 250, hide: 400 }}
         overlay={renderTooltipMaxi}
         className='front-data'
         placement='end'
         >
        <Button key={idx} className='back' onClick={() => handleShowModel(v)} variant="info" style={{height:'40px',width:'40px'}}>
          <span style={{fontSize:'10x',color:'white'}}><FontAwesomeIcon icon={faMaximize}/></span>
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
        </OverlayTrigger>
        ))}
       
          {/* <Button variant="info"style={{height:'40px',width:'40px'}} className='back' onClick={handleClose}> <span style={{fontSize:'10x',color:'white'}}><FontAwesomeIcon icon={faMaximize}/></span> </Button> */}
        </Offcanvas.Body>
        
      </Offcanvas>





      <Modal show={showModel} fullscreen={fullscreen} onHide={() => setShowModel(false)} size='xl' style={{marginBottom:'40px'}}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Video</Modal.Title> */}
          <ButtonGroup aria-label="First group" className='front'>
                <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipVideo}
                className='front-data'
                placement='end'
                >


        
        <Button className='back' onClick={handleCloseModel} variant="info">
          <span style={{fontSize:'10x',color:'white'}}><FontAwesomeIcon icon={faMaximize}/></span>
        </Button>
      
                {/* <Button variant="info"><FontAwesomeIcon icon={faMinimize}/> </Button> */}
                </OverlayTrigger>
                {' '}
                
                <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipMicrophone}
                className='front-data'
                placement='end'
                >
                <Button variant="dark" onClick={handleCloseModelChat}><FontAwesomeIcon icon={faMessage}/> </Button>
                </OverlayTrigger>
                {' '}

            
            </ButtonGroup>
        </Modal.Header>
        <Modal.Body style={{width:'100%',padding:'1px 5%'}}>
            <Container>
                <Row>
                    <Col>
                    <SingleVideoCall/>
                    </Col>
                </Row>
            </Container>
        
        </Modal.Body>
      </Modal>
    </Container> 
</Card>
</>
);

}
export default MessageCard;