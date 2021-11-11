import "./Styles/App.css";
import NavBar from "./NavBar";
import Posting from "./Pages/Posting";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="MainDiv bg-indigo-200">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/post" exact component={Posting} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
