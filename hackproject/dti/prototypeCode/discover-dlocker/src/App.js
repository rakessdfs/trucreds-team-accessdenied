import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Styling Imports.
import "./App.css";

// Redux Imports.
import { Provider } from "react-redux";
import store from "./store";

//DFS Core Styling Overrides.
import { DiscoverAppProvider } from "@dfs-react-ui/core";
import "@dfs-react-ui/core/dist/assets/css/dfs-react-ui_fonts.css";
import { DLocker } from "./pages/hackathon/pages/DLocker";
import { DLockerRecovery } from "./pages/hackathon/pages/DLockerRecovery";

/****************************************************
 * Function:  App
 * Purpose:   Holds all of the pages and routing.
 * Params:    props
 ****************************************************/
export default function App() {
  return (
    <Provider store={store}>
    <DiscoverAppProvider theme="dfsTheme">
    <Router basename="/teamAccessDenied">
    <Switch>
    <Route path="/DLocker">
    <div className="container">
    <DLocker />
    </div>
    </Route>
    <Route path="/DLockerRecovery">
    <DLockerRecovery />
    </Route>
    </Switch>
    </Router>
    </DiscoverAppProvider>
    </Provider>
);
}
