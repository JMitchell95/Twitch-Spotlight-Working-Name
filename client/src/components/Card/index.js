import React from "react";

function Card(props) {
    return(

    <div class="card" >

        <h5 class="card-title">{props.streamer}</h5>
        <img class="card-img-top" alt="Preview-Image" src={props.thumbnail} />
        <div class="card-body">
        <p class="card-text">{props.gamename}</p>
        <p class="card-text">Viewer Count:{props.viewcount}</p>
        
        <a href={props.url} class="btn btn-primary">Go to Stream!</a>
        </div>
    </div>
       
    );
};

export default Card;