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
import MyMessageCard from './MyMessageCard';
import OtherMessageCard from './OtherMessageCard';
function ConferenceChatBot()
{
    const [sho, setSho] = useState(false);

    const handleClos = () => setSho(false);
    const handleSho = () => setSho(true);


    function showMembers()
    {
        setSho(true);
    }
  


return(

<>
<Container>
    <Row style={{padding:'2%',backgroundColor:'rgba(0,0,0,0.3)',borderTopRightRadius:'15px',borderTopLeftRadius:'15px'}} className='back-two'>
        <Col sm={2}>
        <img src={User} style={{height:'35px',width:'35px',marginTop:'-20px',borderRadius:'2px'}} className="back-two"/>
        </Col>
        <Col sm={10}>
            <p><span style={{fontSize:'13px',padding:'1% 5%',marginLeft:'12%',borderRadius:'7px'}} className='back-two'> <Spinner animation="grow" size="sm" variant="success"/> Peter is Typing....</span></p> 
        </Col>
    </Row>
    
    <Row style={{height:'380px',backgroundColor:'whitesmoke',overflow:'auto'}} className="srollMessage">
        
    <Col>
    <br></br>
    <MyMessageCard/>
    <OtherMessageCard/>
    <MyMessageCard/>
    <OtherMessageCard/>
    <MyMessageCard/>
    <OtherMessageCard/>
    </Col>

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
                  
                    <span style={{fontSize:'20px',marginLeft:'-50px',fontWeight:'none',color:'gray'}}> <FontAwesomeIcon icon={faLocationArrow} /></span>
                </Form>
                <br></br>
        </Col>
    </Row>
    
</Container>
    
</>
);

}
export default ConferenceChatBot;