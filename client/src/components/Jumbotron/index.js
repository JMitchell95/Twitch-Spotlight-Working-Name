import React from "react";
import background from "../../img/stock-spotlight.jpg";
const Jumbotron = ({ children }) => {



  return (
    <div
      style={{ height: 160, clear: "both", paddingTop: 30, textAlign: "center", backgroundImage: `url(${background})`  }}
      className="jumbotron border border-info"
    >
      {children}
    </div>
  );
};

export default Jumbotron;
