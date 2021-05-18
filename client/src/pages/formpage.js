import React from "react";
import {Col, Row, Container} from "../components/Grid";
import FormEventLogin from "../components/LogInForm"; 
import FormEventRegister from "../components/RegisterForm";

function FormPage() {

    return(
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <FormEventLogin />
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <FormEventRegister />
                </Col>
            </Row>
        </Container>
    );
}

export default FormPage;