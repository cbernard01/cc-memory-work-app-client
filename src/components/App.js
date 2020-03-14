import React from "react";
import {Route, Router, Switch} from "react-router-dom";
import history from "../utils/history";
import Header from "./default/Header";

import Home from "./default/Home";
import TaskList from "./tasks/TaskList";
import MathList from "./subjects/math";


function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header/>
        <Switch>
          <Route path={"/"} exact component={Home}/>
          <Route path={"/tasks"} exact component={TaskList}/>
          <Route path={"/subject/math/:id"} exact component={MathList}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
