import React from "react";
import Jumbotron  from "../components/Jumbotron";
import {Col, Row, Container} from "../components/Grid";
import Button from "../components/Button";


function UserPage() {
    return(
        
        <Container fluid>
            <Row>
                <Col size= "md-12">
                    <Jumbotron>
                        <h1>PROFILE PAGE</h1>
                    </Jumbotron>

                </Col>
            </Row>

        <Row>
            <h1>USER CREATED SEARCH BUTTONS RENDERED HERE !</h1>
            <Col size="md-3">
                <Button/>
            </Col>
            <Col size="md-3">
                <Button/>
            </Col>
            <Col size="md-3">
                <Button/>
            </Col>
            <Col size="md-3">
                <Button/>
            </Col>
        </Row>
        </Container>

    )
}

export default UserPage;
