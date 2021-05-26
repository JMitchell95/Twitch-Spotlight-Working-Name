import React from "react";
import Jumbotron  from "../components/Jumbotron";
import {Link} from "react-router-dom";
import Button from "../components/Button";
import {Col, Row, Container} from "../components/Grid";
import { apiClient } from "../utils/API";


function Selection(){


    async function getStreams(){
            const request = apiClient.helix.streams.getStreams();
            console.log(data[1]._data.viewer_count);
    }

         getStreams();

    return(

        <Container fluid>
            <Row>
                <Col size= "md-12">
                    <Jumbotron>
                        <h1>USER SLECT PAGE (WIP)</h1>
                    </Jumbotron>

                </Col>
            </Row>

        <Row>
            <h1>BUTTONS GO HERE NEED TO BE DYNAMICALLY RENDERED!</h1>
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

export default Selection;