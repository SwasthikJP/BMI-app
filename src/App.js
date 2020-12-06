import Otppage from './components/otp'
import Ageandgenderpage from './components/ageandgender'
import Resultpage from './components/result'
import Getstarted from './components/getstarted'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  //  <Ageandgenderpage/>
  <Router>
     <Switch>
          <Route exact path="/">
            <Getstarted />
          </Route>
          <Route path="/otp">
            <Otppage />
          </Route>
          <Route path="/info">
            <Ageandgenderpage />
          </Route>
          <Route path="/result">
            <Resultpage />
          </Route>
        </Switch>
  </Router>
  );
}

export default App;
