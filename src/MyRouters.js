import React from "react";
import {Switch, Route} from 'react-router-dom'
import Dashboard from "./components/Dashboard";
import Dashboard_Class from "./components/Dashboard-Class";
import Dashboard_DetailClass from "./components/Dashboard-DetailClass";
import LandingPage from "./components/LandingPage";

function MyRouter(){
    return(
        <Switch>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/courses" component={Dashboard_Class}></Route>
            <Route path="/course/:matkulId" component={Dashboard_DetailClass}></Route>
            <Route path="/" component={LandingPage}></Route>
        </Switch>
    );
}

export default MyRouter;