import React, { Component, useState, useEffect} from "react";
import Jumbotron  from "../components/Jumbotron";
import {Link} from "react-router-dom";
import Button from "../components/Button";
import {Col, Row, Container} from "../components/Grid";
import { apiClient } from "../utils/API";



class Selection extends Component {
    constructor(props){
        super(props);{
            this.state =({
                streamer: '',
                thumbnail: '',
                gamename: ''
            })

        }
    };

 
    componentDidMount(){
        let component = this;
        const  getStreams = async () =>{
            try{
            const request =  await apiClient.helix.streams.getStreams();
             
            this.setState({
                streamer: request.data
            })
            console.log(request.data)
            }
            catch(err){
                throw err;
            }
        }
        getStreams();
    }
        render(){
        return (
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
}

export default Selection;