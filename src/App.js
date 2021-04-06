import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import MovieDetail from "./components/movieDetail/MovieDetail";
import NavBar from "./components/navBar/NavBar";
import FavoritePage from "./components/favoritePage/FavoritePage";

function App(props) {
  return (
    <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />

          <Route exact path="/movie/:movieId" component={MovieDetail} />
          <Route exact path="/favoritePage" component={FavoritePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
