import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { NavBar } from "../Global/NavBar";
import { FilterMenu } from "../Global/Menu";
import { Home } from "./Home";
import { LaunchYear } from "./LaunchYear";
import { SuccessfulLaunch } from "./SuccessfulLaunch";
import { LandSuccessful } from "./LandSuccessful";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="displayFlex">
        <FilterMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/launch_year/:id" component={LaunchYear} />
          <Route
            exact
            path="/launch_success/:id"
            component={SuccessfulLaunch}
          />
          <Route exact path="/land_success/:id" component={LandSuccessful} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
