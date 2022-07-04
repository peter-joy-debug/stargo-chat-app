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
      <Button variant="outline-dark" onClick={handleShow} className="back">
        Create Account
      </Button>

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