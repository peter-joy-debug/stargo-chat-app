import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SignUpForm from './SignUpForm';

function OffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <p style={{padding:'2%',color:'black',fontStyle:'justified',textAlign:'justify'}} className='back-two'>
        Hi, Welcome to Stargo Chat App. As we are testing this app, there is no need to create Account. What you need is to type an email within the form along with the password and navigate into the main app.
      </p>
      <br>

</br>
      <Button variant="outline-dark" onClick={handleShow} className="back">
        Create Account
      </Button>
      <br>

      </br>

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><br></br><h5 style={{fontFamily:'sans-serif,hervetica,times-new-roman,monospace',textAlign:'center', color:'rgba(79, 80, 82, 0.846)'}}>Sign Up - Stargo Chat App</h5></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <SignUpForm/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

// render(<Example />);

export default OffCanvas;