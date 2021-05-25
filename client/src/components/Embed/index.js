import React from "react";

function Embed(children) {

    return(

        
        // Static Embeds for now later on these should be dynamic 
        <iframe 
        className= "Streamer-Embed" 

        src= {`https://player.twitch.tv/?channel= ${children} &parent=www.example.com`} 

        
        frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620">
        </iframe>
    )
}

export default Embed();