import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AllTeams from './components/AllTeams/AllTeams';
import Banner from './components/Banner/Banner';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Sports from './components/Sports/Sports';
import TeamDetails from './components/TeamDetails/TeamDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/sports">
            <Sports></Sports>
          </Route>
          <Route path="/details/:teamId">
             <TeamDetails></TeamDetails>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
