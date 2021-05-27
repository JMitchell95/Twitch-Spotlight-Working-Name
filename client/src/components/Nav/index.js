import React from "react";
import "./index.css"


function Nav() {
    return(

        // <nav className="navbar navbar=expand-lg navbar-dark bg-primary">
        //     <a classname="navbar-brand" href="/" >
        //          Twitch Spotlight DASHBOARD
        //     </a>

        //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //      <span class="navbar-toggler-icon"></span>
        //      </button>
        // </nav>

<nav class="navbar navbar-expand-lg">
  <a class="navbar-brand" href="/">Twitch Spotlight </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" > More Coming Soon!</a>
      </li>
    </ul>
  </div>
</nav>

    );
}

export default Nav;