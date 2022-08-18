import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import User from '../../images/users/download.png';
import Cover from '../../images/cover/intricate-explorer-h7L-SRej-sw-unsplash.jpg';
import { ListGroup } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faInfoCircle, faMessage, faSearch, faUserPlus, faUsersViewfinder, faVideoCamera, faPhotoFilm, faImage, faImagePortrait} from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faFacebook,faInstagram,faYoutube,faPinterest, faGoogle} from "@fortawesome/free-brands-svg-icons";
import ProfileInfo from './ProfileInfos';
import { useSelector, useDispatch } from "react-redux";


const UserProfileCard = () =>
{


return(
<>
<Card style={{ width: '75%' }} className="back-two">
      <Card.Img variant="top" src={Cover} style={{height:'190px',width:'100%'}}/>
      <Container>
          
          <Row style={{width:'90%',marginLeft:'10%'}}>
              <Col style={{width:'20px',marginTop:'-50px',borderRadius:'2px',marginLeft:'65%',backgroundColor:'white',paddingBottom:'10px'}} className="back">
                <img src={User} style={{height:'53px',width:'53px',marginTop:'-30px',borderRadius:'30px',marginLeft:'20%'}} className='back'/><br></br>
              </Col>
          </Row>
      </Container>
      <Card.Body>
        <Card.Title>Peter Joy</Card.Title>

      </Card.Body>

      <Container>
          <Row>
              <Col sm={10}>
                <ProfileInfo/>
              </Col>
              <Col sm={2}>
                <Button type='button' variant='primary'><FontAwesomeIcon icon={faEdit}/></Button>
              </Col>
          </Row>
      </Container>
      
      <Card.Body>
        <Card.Link href="#"><FontAwesomeIcon icon={faFacebook}/></Card.Link>
        <Card.Link href="#"><FontAwesomeIcon icon={faTwitter}/></Card.Link>
        <Card.Link href="#"><FontAwesomeIcon icon={faInstagram}/></Card.Link>
        <Card.Link href="#"><FontAwesomeIcon icon={faGoogle}/></Card.Link>
        <Card.Link href="#"><FontAwesomeIcon icon={faPinterest}/></Card.Link>
      </Card.Body>
    </Card>
</>
);

}
export default UserProfileCard;