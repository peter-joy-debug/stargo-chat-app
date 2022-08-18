import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import User from '../../images/users/download.png';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faMessage, faSearch, faUserPlus, faUsersViewfinder, faVideoCamera} from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faFacebook,faInstagram,faYoutube,faPinterest} from "@fortawesome/free-brands-svg-icons";
import { useSelector} from "react-redux";
import { useState } from 'react';


const FolkCard = () =>
{




    const [key, setKey] = useState('personal');

    const renderTooltipVideo = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Video Call
        </Tooltip>
      );

      const renderTooltipMessage = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Chat via Message
        </Tooltip>
      );

      const renderTooltipView = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          View Profile
        </Tooltip>
      );
      const renderTooltipAdd = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Add Folk
        </Tooltip>
      );
return(
<>
<Card style={{ width: '75%',padding:'1px' }} className='back-two'>
    <Container>
        <Row>
            <Col sm={2}><Card.Img variant="top" src={User} style={{height:'50px',width:'50px',marginTop:'-15px',borderRadius:'30px'}} className="back-two"/>
            <p style={{padding:'2%',backgroundColor:'green',width:'20%',height:'12px',borderRadius:'100px',marginLeft:'42px',marginTop:'-9px'}} className='back'></p>
            </Col>
            <Col sm={7}>
                <Card.Text>Honore Ndayishimiye</Card.Text>
                <span>ndayishimiyehonore777@gmail</span>
            </Col>
            <Col sm={3}>
            <ButtonGroup aria-label="First group" className='back-two'>
                <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipAdd}
                >
                {/* <FollowBtn key={userId} user={usert}/> */}
                <Button variant="info"><FontAwesomeIcon icon={faUserPlus}/> </Button>
                </OverlayTrigger>
                {' '}
                <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipView}
                >
                <Button variant="info"><FontAwesomeIcon icon={faInfoCircle}/> </Button>
                </OverlayTrigger>
                {' '}
                <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipMessage}
                >
                <Button variant="info"><FontAwesomeIcon icon={faMessage}/> </Button>
                </OverlayTrigger>
                {' '}
                <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipVideo}
                >
                <Button variant="info"><FontAwesomeIcon icon={faVideoCamera}/> </Button>
                </OverlayTrigger>
            </ButtonGroup>
            </Col>
        </Row>
    </Container> 
</Card>
<br></br>
</>
);

}
export default FolkCard;