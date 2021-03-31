import Footer from "./Components/Footer/Footer";
import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import MovieDetail from "./Components/MovieDetail/MovieDetail";
import NavBar from "./Components/NavBar/NavBar";
import FavoritePage from "./Components/FavoritePage/FavoritePage";

function App(props) {
  return (
    <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />

          <Route exact path="/movie/:movieId" component={MovieDetail} />
          <Route exact path="/favoritePage" component={FavoritePage}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
