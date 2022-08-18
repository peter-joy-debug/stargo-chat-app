import React from 'react';
import { MDBDataTable } from 'mdbreact';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

import MessageCard from './MessageCard';
import { Container, Row , Col} from 'react-bootstrap';
const MessageData = () => {
  return (
    <Container>
        <br></br>
        <Row>
            <Col>
            <MessageCard/>
            <br></br>
            <MessageCard/>
            <br></br>
            <MessageCard/>
            <br></br>
            <MessageCard/>
            <br></br>
            <MessageCard/>
            <br></br>
            </Col>
        </Row>
    </Container>
  );
}

export default MessageData;