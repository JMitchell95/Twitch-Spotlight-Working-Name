import React from "react";

function Card() {
    return(

    <div class="card" >

        <img class="card-img-top" /* Thumbnail Tag from api object*/  alt="Pretty"/>
        <div class="card-body">
        <h5 class="card-title">Channel  Name </h5>
        <p class="card-text">Stream Tags: (Making Clickable)</p>
        <p class="card-text">Viewer Count: (Import Object)</p>
        <a  /* href link to channel*/ class="btn btn-primary">Go to Stream!</a>
        </div>
    </div>
       
    );
};

export default Card;