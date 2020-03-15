import React from "react";
import {Route, Router, Switch} from "react-router-dom";
import history from "../utils/history";
import Header from "./common/Header";

import Home from "./common/default/Home";
import TaskList from "./tasks/TaskList";


function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header/>
        <Switch>
          <Route path={"/"} exact component={Home}/>
          <Route path={"/tasks"} exact component={TaskList}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
