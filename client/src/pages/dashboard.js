import React from "react";
import Jumbotron  from "../components/Jumbotron";
import {Link} from "react-router-dom";
import {Col, Row, Container} from "../components/Grid";

function Dashboard() {
    return(

        

        <Container fluid>
            <Row>
                <Col size = "md-12">
                    <Jumbotron>
                        <h1> DASHBOARD </h1>
                         
                    </Jumbotron>
                        
                </Col>
            </Row>
            <Row>
                <h1> BUTTONS IN PROGRESS GO HERE</h1>
            </Row>
        </Container>
    );
}

export default Dashboard;