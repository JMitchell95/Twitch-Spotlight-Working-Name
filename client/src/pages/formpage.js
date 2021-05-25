import React from "react";
import {Col, Row, Container} from "../components/Grid";
import SignupLogin from "../components/RegisterForm";

function FormPage() {

    return(
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <SignupLogin />
                </Col>
            </Row>
        </Container>
    );
}

export default FormPage;