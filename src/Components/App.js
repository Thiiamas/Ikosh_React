import "./Styles/App.css";
import react, { useState, useCallback } from "react";
import Cookies from "js-cookie";
import NavBar from "./NavBar";
import Posting from "./Pages/Posting";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Signup from "./Pages/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  const [sessionUsername, setSessionUsername] = useState(null);
  const [sessionPassword, setPassword] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  return (
    <div className="App bg-indigo-400">
      <Router>
        <NavBar className="text-gray-700" />
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Login setSessionId={setSessionId} />}
          />
          <Route
            path="/post"
            exact
            component={() => <Posting sessionId={sessionId} />}
          />
          <Route path="/signin" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
