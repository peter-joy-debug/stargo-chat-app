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
function FolkCard()
{
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
<Card style={{ width: '73%',padding:'5px' }} className='back-two'>
    <Container>
        <Row>
            <Col sm={2}><Card.Img variant="top" src={User} style={{height:'50px',width:'50px'}}/></Col>
            <Col sm={7}>
                <Card.Text>Peter Joy</Card.Text>
                <span>joyndayishimiye@gmail.com</span>
            </Col>
            <Col sm={3}>
            <ButtonGroup aria-label="First group" className='back-two'>
                <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipAdd}
                >
                <Button variant="secondary"><FontAwesomeIcon icon={faUserPlus}/> </Button>
                </OverlayTrigger>
                {' '}
                <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipView}
                >
                <Button variant="secondary"><FontAwesomeIcon icon={faInfoCircle}/> </Button>
                </OverlayTrigger>
                {' '}
                <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipMessage}
                >
                <Button variant="secondary"><FontAwesomeIcon icon={faMessage}/> </Button>
                </OverlayTrigger>
                {' '}
                <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipVideo}
                >
                <Button variant="secondary"><FontAwesomeIcon icon={faVideoCamera}/> </Button>
                </OverlayTrigger>
            </ButtonGroup>
            </Col>
        </Row>
    </Container> 
</Card>
</>
);

}
export default FolkCard;