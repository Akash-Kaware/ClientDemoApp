// import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "../Login/Login";
import LoggedInRoutes from './LoggedInRoutes';
import { authenticationService } from "../Services/authentication.service";

const Routes = () => {
    const isLoggedIn = () => {
        return authenticationService.currentUserValue?.token != null;
    }
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/"
                    render={props => {
                        if (isLoggedIn()) {
                            return <LoggedInRoutes {...props} />;
                        } else {
                            return <Redirect to="/login" />;
                        }
                    }} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;