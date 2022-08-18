import React from 'react';
import { MDBDataTable } from 'mdbreact';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import GroupCard from './GroupCard';
import MessageCard from './MessageCard';
import { Container, Row , Col} from 'react-bootstrap';
const GroupCardData = () => {
  return (
    <Container>
        <br></br>
        <Row>
            <Col>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            </Col>
        </Row>
    </Container>
  );
}

export default GroupCardData;