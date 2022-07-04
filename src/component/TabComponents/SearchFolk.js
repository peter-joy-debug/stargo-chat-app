import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import '../../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faHands,faProcedures,faUsers,faPhone,faCog,faSearch} from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faFacebook,faInstagram,faYoutube,faPinterest} from "@fortawesome/free-brands-svg-icons";
import FolkCard from "./FolkCard";
import Pagination from 'react-bootstrap/Pagination';
function SearchFolk()
{
    return(
        <>
        <Container fluid style={{paddingLeft:'5%',paddingTop:'1%',backgroundColor:'rgba(0,0,0,0.01)',borderBottomRightRadius:'10px'}} className="back-three">
            <Row>
            
                <Col sm>
                <p style={{paddingLeft:'30px'}} >Meet New People</p>
                <Form className="d-flex">
                    <br></br>
                
                    <FormControl
                    
                    type="search"
                    icon={faSearch}
                    placeholder="Search new people"
                    
                    className="back"
                    aria-label="Search"
                    style={{width:'75%',height:'50px',borderRadius:'30px',backgroundColor:'#ffffff00'}}
                    />
                    {/* <Button variant="outline-success">Search</Button> */}
                    <span style={{fontSize:'30px',marginLeft:'-70px',fontWeight:'none',color:'gray'}}> <FontAwesomeIcon icon={faSearch} /></span>
                </Form>
                </Col>
                
            </Row>
            <Row>
                <Col style={{paddingLeft:'4%'}}>
                    <br></br>
                    <FolkCard/>
                    <br></br>
                    <FolkCard/>
                    <br></br>
                    <FolkCard/>
                    <br></br>
                    <FolkCard/>
                    <br></br>
                

                </Col>
            </Row>
        </Container>
        </>
    );

}

export default SearchFolk;