import {Login} from './components/login';
import Vote from './components/user/vote';
import {Signup} from './components/signup';
import Poll1 from './components/user/pol1';
import Success from './components/user/success';
import {LoginAdmin} from './components/admin/login';
import List from './components/admin/list';
import {Candidate} from './components/admin/addcandidate';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/vote" exact component= {Vote} />
      <Route path="/signup" exact component= {Signup} />
      <Route path="/poll1" exact component = {Poll1} />
      <Route path="/success" exact component = {Success} />
      <Route path="/admin" exact component = {LoginAdmin} />
      <Route path="/list" exact component = {List} />
      <Route path="/addcan" exact component = {Candidate} />
    </Switch>
  </Router>
  );
}

export default App;
