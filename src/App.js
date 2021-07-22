import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './login';
import Register from './register';
import Home from './home';
import Nav from './nav';
import Survey from './survey';

function App() {
  return (
   <>
   <Router>
     <Nav></Nav>
        <div className="container">
          <Switch>
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/home/:id" component={Home} exact />
            <Route path="/survey/:id" component={Survey} exact />
          </Switch>
        </div>
      </Router>
   </>
  );
}

export default App;