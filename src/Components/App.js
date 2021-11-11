import "./Styles/App.css";
import NavBar from "./NavBar";
import Posting from "./Pages/Posting";
import Login from './Pages/Login'
import Home from "./Pages/Home";
import Signup from "./Pages/Signup"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <div className="App bg-indigo-400">
      <Router>
        <NavBar className='text-gray-700'/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/post" exact component={Posting} />
          <Route path="/signin" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
