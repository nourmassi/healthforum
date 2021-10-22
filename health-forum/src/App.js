import './App.css';
import {Route, Switch} from 'react-router-dom';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Welcome from './Welcome/Welcome';
import Forums from './Forums/Forums';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <Welcome />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/forums'>
          <Forums />
        </Route>
      </Switch>
    </div>
  );
}

export default App;