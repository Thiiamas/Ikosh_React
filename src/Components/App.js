import "./Styles/App.css";
import react, { useState, useCallback } from "react";
import Cookies from "js-cookie";
import Posting from "./Pages/Posting";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Fansites from "./Pages/Fansites";
import Signup from "./Pages/Signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import AuthService from "../services/auth-service";
import TailWindNavBar from "./TailwindNavBar";
import UserContent from "./TestPages/user-content";
import AdminContent from "./TestPages/admin-content";

function App() {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser);
  const [accessToken, setAccessToken] = useState(null);
  return (
    <div className="App bg-indigo-400">
      <Router>
        <TailWindNavBar currentUser={currentUser} />
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Login setUser={setCurrentUser} />}
          />
          <Route
            path="/post"
            exact
            component={() => <Posting user={currentUser} />}
          />
          <Route path="/signin" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route
            path="/profile"
            exact
            component={() => <Profile currentUser={currentUser} />}
          />
          <Route
            path="/userBoard"
            exact
            component={() => <UserContent currentUser={currentUser} />}
          />
          <Route
            path="/adminboard"
            exact
            component={() => <AdminContent currentUser={currentUser} />}
          />
          <Route
            path="/fansites"
            exact
            component={() => <Fansites currentUser={currentUser} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
