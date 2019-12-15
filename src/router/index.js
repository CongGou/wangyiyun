import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../view/home";
import MyMusic from "../view/MyMusic";
import Friend from "../view/friend";
import ListenerList from "../view/listenerlist";
import Found from "../commons/found";
class RouterIndex extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path={"/"}
            render={() => <Redirect to={"/home/discover"} />}
          />
          <Route path={"/home/:id"} component={Home} />
          <Route path={"/listener/:id"} component={ListenerList} />
          <Route path={"*"} component={Found} />
        </Switch>
      </div>
    );
  }
}

export default RouterIndex;
