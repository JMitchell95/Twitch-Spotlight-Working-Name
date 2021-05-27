import React, { Component} from "react";
import Jumbotron  from "../components/Jumbotron";
import {Col, Row, Container} from "../components/Grid";
import { apiClient } from "../utils/API";
import Card from "../components/Card";



class Dashboard extends Component {

            state = ({ streams:''

            })

        


 
    componentDidMount(){ 
        const  getStreams = async () =>{
            try{const request =  await apiClient.kraken.streams.getAllStreams(1,25);
            console.log(request);
            return this.setState({streams:request})     
            }
            catch(err){
                throw err;
            }
        }
        getStreams();
    }
        render(){
        return (
            <div>
        <Container fluid>
            <Row>
                <Col size= "lg">
                    <Jumbotron>
                        <h1>Twitch Spotlight</h1>
                        <h3>(WIP)</h3>
                    </Jumbotron>
                </Col>
            </Row>


        <Row>
            <Col size="sm"/>
                <Col size="sm">  
                    <Card request = {this.state.streams}/>
                </Col>
            <Col size="sm"/>
        </Row>
        </Container>
        </div>
    )

    }
}

export default Dashboard;