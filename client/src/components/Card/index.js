import React from "react"; 
import {Col, Row} from "../Grid";
import "./index.css"


function Card(props) {

return(
    <Row>
        <Col size = "md-12">
    {props.request && props.request.map(function(streams){

            return <div class="card bg-dark mb-3" style={{ width: '64rem' }} >
            <h2>{streams._data.channel.name}</h2>
            <img class="card-img-top"  src={streams._data.preview.large} /> 
            <div class="card-body">
            <p class="card-text">{streams.game}</p>
            <p class="card-text">{streams._data.channel.description}</p>
            <p class="card-text mb-2 text-muted">Viewer Count:{streams.viewers}</p>
            
            <a href={streams._data.channel.url} class="btn btn-secondary btn-lg btn-block">Go to Stream!</a>
            </div>
         </div>

    })}

        </Col>  
    </Row>
  )    
};

export default Card;
