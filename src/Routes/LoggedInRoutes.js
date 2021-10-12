import {  Route, Switch  } from "react-router-dom";
import UserDetails from '../UserDetails/UserDetails'
const LoggedInRoutes = () => {
    return (
        <Switch>
            {/* <Route path="/pages" component={Pages} /> */}
                <Route path="/" component={UserDetails} />
        </Switch>
    )

}

export default LoggedInRoutes;