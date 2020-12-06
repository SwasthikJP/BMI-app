import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Otp from './components/otp'
// import Info from './components/ageandgender'
// import Resultpage from './components/result'
// import { Router, Route, Link, browserHistory, IndexRoute  } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <Router history={browserHistory}>
  //   <Route path="/" component={App}>
  //     <Route path="otp" component={Otp}/>
  //     <Route path="info" component={Info}/>
  //     <Route path="result" component={Resultpage}/>
  //     </Route>
  //   </Router>
  ,
  document.getElementById('root')
);


reportWebVitals();
