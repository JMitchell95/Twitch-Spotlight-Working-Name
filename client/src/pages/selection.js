import React, { Component, useState, useEffect} from "react";
import Jumbotron  from "../components/Jumbotron";
import {Link} from "react-router-dom";
import Button from "../components/Button";
import {Col, Row, Container} from "../components/Grid";
import { apiClient } from "../utils/API";
import Card from "../components/Card";



class Selection extends Component {

            state = ({
              streamer: '',
                url: '',
                gamename: '',
                streamtitle: '',
                viewcount:'',
                thumbnail: ''
            })

        
    

 
    componentDidMount(){ 
        const  getStreams = async () =>{
            try{
    
            const request =  await apiClient.kraken.streams.getAllStreams(1,100);
            console.log(request);
             
                // let streamArray =[].push(request);

            this.setState({

                    streamer: request[85].channel.name,
                    url: request[85].channel.url,
                    gamename: request[85].channel.game,
                    viewcount: request[85].viewers,
                    streamtitle:request[85].channel.status,
                    thumbnail: request[85]._data.preview.medium
                

            })

                
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

                    <Card
                    thumbnail={this.state.thumbnail}
                    streamer={this.state.streamer}
                    gamename={this.state.gamename}
                    viewcount={this.state.viewcount}
                    url={this.state.thumbnail}
                    />

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