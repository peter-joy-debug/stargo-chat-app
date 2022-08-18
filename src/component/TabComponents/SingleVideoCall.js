import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import User from '../../images/users/download.png';
import Cover from '../../images/cover/intricate-explorer-h7L-SRej-sw-unsplash.jpg';
import { Form, FormControl, ListGroup } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faInfoCircle, faMessage, faSearch, faUserPlus, faUsersViewfinder, faVideoCamera, faPhotoFilm, faImage, faImagePortrait, faLocationArrow, faUser, faVideo, faMicrophone, faRecordVinyl, faClose} from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faFacebook,faInstagram,faYoutube,faPinterest, faGoogle} from "@fortawesome/free-brands-svg-icons";
import ProfileInfo from './ProfileInfos';
import '../../App.css';
function SingleVideoCall()
{
    const renderTooltipVideo = (props) => (
        <Tooltip id="button-tooltip" {...props}>
         Video
        </Tooltip>
      );

      const renderTooltipMicrophone = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Microphone
        </Tooltip>
      );

      const renderTooltipRecord = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Record 
        </Tooltip>
      );
      const renderTooltipEnd = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          End Call
        </Tooltip>
      );
    return(
        <>
        <Container>
            <Row style={{padding:'2%',backgroundColor:'lightblue',borderTopRightRadius:'15px',borderTopLeftRadius:'15px'}}>
                <Col sm={2}>
                <img src={User} style={{height:'35px',width:'35px',marginTop:'-20px',borderRadius:'30px'}} className="back-two"/>
                </Col>
                <Col sm={10}>
                    <p>Peter Joy <span style={{fontSize:'13px',padding:'1% 5%',marginLeft:'12%',borderRadius:'7px'}} className='back-two'> <Spinner animation="grow" size="sm" variant="danger"/>Connecting...</span></p> 
                </Col>
   
            </Row>
        </Container>
        <Row>
            <Container>
            
            <Col style={{backgroundColor:'rgba(0,0,0,0.7)',paddingTop:'270px',paddingLeft:'70%',paddingBottom:'3%'}}>
                <Col style={{backgroundColor:'coral',width:'230px',height:'130px'}}>
                
                </Col>
            </Col>
            </Container>
        </Row>
        <Row>
            <Col sm>
            
            </Col>
            <Col sm style={{textAlign:'center',backgroundColor:'whitesmoke',padding:'1%',marginTop:'-27px'}} className='back-two'>
            <ButtonGroup aria-label="First group" className='front'>
                <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipVideo}
                className='front-data'
                placement='end'
                >
                <Button variant="success"><FontAwesomeIcon icon={faVideo}/> </Button>
                </OverlayTrigger>
                {' '}
                <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipMicrophone}
                className='front-data'
                placement='end'
                >
                <Button variant="info"><FontAwesomeIcon icon={faMicrophone}/> </Button>
                </OverlayTrigger>
                {' '}

                <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipRecord}
                className='front-data'
                placement='end'
                >
                <Button variant="orange"><FontAwesomeIcon icon={faRecordVinyl}/> </Button>
                </OverlayTrigger>
                {' '}
                <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipEnd}
                className='front-data'
                placement='end'
                >
                <Button variant="danger"><FontAwesomeIcon icon={faClose}/> </Button>
                </OverlayTrigger>
                {' '}
             
            </ButtonGroup>
            </Col>
            <Col sm>
            
            </Col>
        </Row>
     
        </>
    );
}
export default SingleVideoCall;