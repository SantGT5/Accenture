import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { NavBar } from "./Global/NavBar";
import { FilterMenu } from "./FilterMenu";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={FilterMenu} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
