import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import User from '../../images/users/download.png';
import { Container, Modal } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faDoorOpen, faInfoCircle, faMessage,faUsers, faSearch, faTimesSquare, faUserPlus, faUsersViewfinder, faVideoCamera} from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faFacebook,faInstagram,faYoutube,faPinterest} from "@fortawesome/free-brands-svg-icons";
import { useState } from 'react';
import GroupChatBox from './GroupChatBox';
function GroupCard()
{   
      const renderTooltipAdd = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Switch to Chat Room
        </Tooltip>
      );
      const values = [true];
      const [show, setShow] = useState(false);
      const [fullscreen, setFullscreen] = useState(true);

      function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
      }

return(
<>
<Card style={{ width: '80%',padding:'5px', borderRadius:'50px' }} className='back-two'>
    <Container>
        <Row>
            <Col sm={2}><FontAwesomeIcon icon={faUsers} style={{height:'30px',width:'30px',marginTop:'-20px',borderRadius:'30px',padding:'5%',backgroundColor:'rgb(79, 123 , 894)',color:'black', fontSize:'5PX'}} className="back-two"/>
            <p style={{padding:'2%',backgroundColor:'green',width:'10%',height:'6px',borderRadius:'100px',marginLeft:'32px',marginTop:'-9px'}} className='back'></p>
            
            </Col>
            <Col sm={9}>
            <span style={{fontSize:'10px',backgroundColor:'black',padding:'1%',color:'white',borderBottomLeftRadius:'12px',borderTopRightRadius:'12px'}}>GTX Fan</span> <br></br>
             <span style={{borderBottomLeftRadius:'12px',padding:'2%',fontSize:'14px',fontFamily:'Times new roman,monospace,serif,sans serif'}} className="">Hope you all fine, this group is cool </span><span style={{fontSize:'11px'}} className='back-three'> | 12:00</span>
            </Col>
            <Col sm={1}>
               
                      {values.map((v, idx) => (
                     <OverlayTrigger
                     placement="bottom"
                     delay={{ show: 250, hide: 400 }}
                     overlay={renderTooltipAdd}
                     >
                      <Button key={idx} variant="purple" className='back' onClick={() => handleShow(v)}>
                        <span style={{fontSize:'20px',color:'white'}}><FontAwesomeIcon icon={faMessage}/></span>
                        {typeof v === 'string' && `below ${v.split('-')[0]}`}
                        </Button>
                        
                        </OverlayTrigger>
                    ))}
                     <Modal show={show} size='lg' fullscreen={fullscreen} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                    <Modal.Title>Chat Room | Stargo</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                        <GroupChatBox/>
                        </Modal.Body>
                    </Modal>
                {/* <Button variant="purple"style={{height:'35px',width:'35px'}} className='back' onClick={() => setLgShow(true)}> <span style={{height:'7px',width:'7px',color:'white'}}><FontAwesomeIcon icon={faMessage}/></span> </Button> */}
                
        
            </Col>
        </Row>
    </Container> 
    
      
</Card>
<br></br>
</>
);

}
export default GroupCard;