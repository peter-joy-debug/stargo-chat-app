import React from 'react';
import { MDBDataTable } from 'mdbreact';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import PageItem from 'react-bootstrap/PageItem'
import Pagination from 'react-bootstrap/Pagination';

import FolkCard from './FolkCard';
import { Col, Container, Row } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

const DatatablePage = () => {

  return (
    <Container>
      <Row>
        <Col>
        <Form className="d-flex">
                
                    <FormControl
                    
                    type="search"
                    icon={faSearch}
                    placeholder="Search new people"
                    
                    className="back"
                    aria-label="Search"
                    style={{width:'65%',height:'40px',borderRadius:'20px',backgroundColor:'#ffffff00'}}
                    />
                    {/* <Button variant="outline-success">Search</Button> */}
                    <span style={{fontSize:'20px',marginLeft:'-50px',fontWeight:'none',color:'gray'}}> <FontAwesomeIcon icon={faSearch} /></span>
                </Form>
                <br></br>
        </Col>
      </Row>
        <Row>
            <Col>
            <FolkCard/>
            <FolkCard/>
            
            </Col>
        </Row>
        <Row>
          <Col>
          
          <p>Pagination</p>

          </Col>
        </Row>
    </Container>
  );
}

export default DatatablePage;