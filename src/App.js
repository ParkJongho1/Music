import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Main from "./components/pages/Main";
import TodayMusic from "./components/pages/TodayMusic";
import IntroMusic from "./components/pages/IntroMusic";
import PopularMusic from "./components/pages/PopularMusic";
import IntroAlbum from "./components/pages/IntroAlbum";
import TopMusic from "./components/pages/TopMusic";
import MyMusic from "./components/pages/MyMusic";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/todayMusic" exact component={TodayMusic} />
      <Route path="/introMusic" exact component={IntroMusic} />
      <Route path="/popularMusic" exact component={PopularMusic} />
      <Route path="/introAlbum" exact component={IntroAlbum} />
      <Route path="/yopMusic" exact component={TopMusic} />
      <Route path="/myMusic" exact component={MyMusic} />
    </Router>
  );
}

export default App;
