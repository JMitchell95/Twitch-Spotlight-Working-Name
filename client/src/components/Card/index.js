import React from "react";

function Card() {
    return(

    <div class="card" >

        <img class="card-img-top" src="..." />
        <div class="card-body">
        <h5 class="card-title">Channel  Name </h5>
        <p class="card-text">Stream Tags (Making Clickable)</p>
        <p class="card-text">viewer Count: (Making Clickable)</p>
        <a href="#" class="btn btn-primary">Go to Stream!</a>
        </div>
    </div>
       
    );
};

export default Card;