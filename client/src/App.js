import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
// import Dashboard from "./pages/dashboard";
import Dashboard from "./pages/selection";

// import UserPage from "./pages/userPage";
// import FormPage from "./pages/formpage";

  function App(){

  return (
  <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          {/* <Route exact path="/selection" component={Selection} /> */}
          {/* <Route exact path="/userpage" component={UserPage} /> */}
          {/* <Route exact path="/login" component= {FormPage} /> */}
        </Switch>
      </div>
  </Router>
  );
}


export default App;
