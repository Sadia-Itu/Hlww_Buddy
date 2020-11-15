
import './App.css';
import Home from './Components/Home/Home';
import PostDetails from './Components/PostDetails/PostDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div>
    
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/post/:id">
          <PostDetails />
        </Route>
      </Switch>
    </Router>
    
  </div>
  );
}

export default App;
