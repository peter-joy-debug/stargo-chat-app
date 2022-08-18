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
function CreatedCard()
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
<Card style={{ width: '75%',padding:'5px' }} className='back-two'>
    <Container>
        <Row>
            <Col sm={3}><p style={{padding:'1%',borderRadius:'5px',textAlign:'center'}} className="back-two">Name</p>
            
            </Col>
            <Col sm={7}>
                <Card.Text>...... Meeting Description ......</Card.Text>
            </Col>
            <Col sm={2}>
            <p>12:23</p>
            </Col>
        </Row>
    </Container> 
</Card>
<br></br>
</>
);

}
export default CreatedCard;