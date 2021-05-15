import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./pages/dashboard";
import Selection from "./pages/selection";
import UserPage from "./pages/userPage";



function App() {
  return (
  
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/selection" component={Selection} />
          <Route exact path="/userpage" component={UserPage} />
        </Switch>


    </div>
    </Router>
  );
}


export default App;
