import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faBroadcastTower, faCogs, faInfoCircle, faMessage, faSearch, faSignsPost, faUser, faUserPlus, faUsers, faUsersViewfinder, faVideoCamera} from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faFacebook,faInstagram,faYoutube,faPinterest} from "@fortawesome/free-brands-svg-icons";
import Folks from './TabComponents/Folks';
import MessagePanel from './TabComponents/MessagePanel';
import SearchFolk from './TabComponents/SearchFolk';
import UserProfileCard from './TabComponents/UserProfileCard';
import ConferanceTab from './TabComponents/ConferenceTabs';
import SettingTab from './TabComponents/SettingTab';
import LogoutPage from './TabComponents/LogoutPage';
function MainTabs() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" collapseOnSelect>
      <Row>
        <Col sm={3} className="back" style={{paddingTop:'10px',paddingBottom:'10px',height:'310px'}}>
          <Nav variant="nav nav-pills dark" className="flex-column" bg="dark" navbar sticky='top'>
            <Nav.Item>
              <Nav.Link eventKey="first"><FontAwesomeIcon icon={faSearch} /> Search</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth"><FontAwesomeIcon icon={faUser} /> Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second"><FontAwesomeIcon icon={faUsers} /> Folks</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third"><FontAwesomeIcon icon={faMessage} /> Messages</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="forth"><FontAwesomeIcon icon={faBroadcastTower} /> Conferance</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="eight"><FontAwesomeIcon icon={faCogs} /> Settings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sixth"><FontAwesomeIcon icon={faArrowAltCircleLeft} /> Logout</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
                
              <SearchFolk/>
            </Tab.Pane>
            <Tab.Pane eventKey="second" style={{paddingLeft:'5%'}}>
            <Folks/>
            </Tab.Pane>

            <Tab.Pane eventKey="third" style={{paddingLeft:'5%'}}>
            <MessagePanel/>
            </Tab.Pane>
            <Tab.Pane eventKey="forth" style={{paddingLeft:'5%'}}>
              <ConferanceTab/>
              <br></br>
            </Tab.Pane>

            <Tab.Pane eventKey="fifth" style={{paddingLeft:'5%'}}>
              <UserProfileCard/>
              <br></br>
            </Tab.Pane>
            <Tab.Pane eventKey="sixth" style={{paddingLeft:'5%'}}>
              <LogoutPage/>
              <br></br>
            </Tab.Pane>
            <Tab.Pane eventKey="eight" style={{paddingLeft:'5%'}}>
              <SettingTab/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default MainTabs;