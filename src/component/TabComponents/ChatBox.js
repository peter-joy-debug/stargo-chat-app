import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import User from '../../images/users/download.png';
import Cover from '../../images/cover/intricate-explorer-h7L-SRej-sw-unsplash.jpg';
import { Form, FormControl, ListGroup, Modal, Offcanvas } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faInfoCircle, faMessage, faSearch, faUserPlus, faUsersViewfinder, faVideoCamera, faPhotoFilm, faImage, faImagePortrait, faLocationArrow, faUser, faMaximize} from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faFacebook,faInstagram,faYoutube,faPinterest, faGoogle} from "@fortawesome/free-brands-svg-icons";
import ProfileInfo from './ProfileInfos';
import SingleVideoCall from './SingleVideoCall';
import '../../App.css';
import { useState } from 'react';
import MyMessageCard from './MyMessageCard';
import OtherMessageCard from './OtherMessageCard';
function ChatBox()
{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [showModel, setShowModel] = useState(false);
  
    function handleShowModel(breakpoint) {
      setFullscreen(breakpoint);
      setShowModel(true);
      setShow(false);
    }

return(

<>
<Container>
    <Row style={{padding:'2%',backgroundColor:'lightblue',borderTopRightRadius:'15px',borderTopLeftRadius:'15px'}}>
        <Col sm={2}>
        <img src={User} style={{height:'35px',width:'35px',marginTop:'-20px',borderRadius:'30px'}} className="back-two"/>
        </Col>
        <Col sm={10}>
            <p>Peter Joy <span style={{fontSize:'13px',padding:'1% 5%',marginLeft:'12%',borderRadius:'7px'}} className='back-two'> <Spinner animation="grow" size="sm" variant="success"/>Typing....</span></p> 
        </Col>
        
    

    </Row>
    
    <Row style={{height:'400px',backgroundColor:'whitesmoke',overflow:'auto'}} className="srollMessage">
       
        <Container>
        <br></br>
            <Row>
        
                <Col sm={12}>
                
                <MyMessageCard/>
            
                <OtherMessageCard/>
            
                <MyMessageCard/>
            
                <OtherMessageCard/>
               


                </Col>
            </Row>
        </Container>
    </Row>
    <Row style={{backgroundColor:'white',color:'white',padding:'2%',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}} className='back-three'>
        <Col>
        <Form className="d-flex">
                
                    
                    <FormControl
                    
                    type="text"

                    placeholder="Type message Here"
                    
                    className="back"
                    aria-label="Search"
                    style={{width:'100%',height:'50px',borderRadius:'20px',backgroundColor:'#ffffff00'}}
                    />
                    {/* <Button variant="outline-success">Search</Button> */}
                    <span style={{fontSize:'20px',marginLeft:'-50px',fontWeight:'none',color:'gray'}}> <FontAwesomeIcon icon={faLocationArrow} /></span>
                </Form>
                <br></br>
        </Col>
    </Row>
    
</Container>
    
</>
);

}
export default ChatBox;