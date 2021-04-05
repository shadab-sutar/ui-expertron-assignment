import { Route, Switch } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import MentorTasks from './components/MentorTasks';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Home" component={Home} />
        <Route path="/tasks" component={MentorTasks} />
      </Switch>
    </div>
  );
}

export default App;
