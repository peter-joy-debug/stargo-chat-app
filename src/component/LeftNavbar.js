import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const LeftNavbar = () => {

  
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#1a1c1fdc'}} variant="dark">
      <Container>
        <Navbar.Brand href="#home"><span style={{fontWeight:'none',fontSize:'10px!important'}}>Stargo - ChatApp</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
          <span>
              <FontAwesomeIcon icon={faBell}> <Badge bg="secondary">9</Badge>
              <span className="visually-hidden">unread messages</span>
            </FontAwesomeIcon>
            </span>
            </Nav.Link>
            <NavDropdown title="Peter" id="collasible-nav-dropdown">
           
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href='/'>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LeftNavbar;