import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function LeftNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#1a1c1fdc'}} variant="dark">
      <Container>
        <Navbar.Brand href="#home"><span style={{fontWeight:'none',fontSize:'10px!important'}}>Stargo - ChatApp</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Key</Nav.Link>
            <NavDropdown title="Peter Joy" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Setting</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
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