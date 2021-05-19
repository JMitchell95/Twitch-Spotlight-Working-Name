import React from "react";
import Jumbotron  from "../components/Jumbotron";
import {Link} from "react-router-dom";
import {Col, Row, Container} from "../components/Grid";
import Button from "../components/Button";
import Card from "../components/Card";

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
                <Col size = "md-3">
                <Card />
                </Col>
                <Col size = "md-3">
                <Card />
                </Col>
                <Col size = "md-3">
                <Card />
                </Col>
                <Col size = "md-3">
                <Card />
                </Col>

            </Row>
        </Container>
    );
}

export default Dashboard;