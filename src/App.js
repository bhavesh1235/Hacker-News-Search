import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import Stories from "./components/Stories";
import SingleStory from "./components/SingleStory";
import Buttons from "./components/Buttons";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SearchForm />
          <Buttons />
          <Stories />
        </Route>
        <Route path="/stories/:id">
          <SingleStory />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
