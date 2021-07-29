import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import MovieDetail from "./Components/MovieDetail/MovieDetail";
import NavBar from "./Components/NavBar/NavBar";
import FavoritePage from "./Components/FavoritePage/FavoritePage";
import PageFooter from "./Components/PageFooter/PageFooter";

function App(props) {
  return (
    <div style={{ minHeight: "calc(100vh - 80px)" }}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />

          <Route exact path="/movie/:movieId" component={MovieDetail} />
          <Route exact path="/favoritePage" component={FavoritePage} />
        </Switch>
        <PageFooter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
