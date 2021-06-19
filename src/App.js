import './css/App.css';
import AboutPage from './component/pages/AboutPage';
import LoginPage from './component/pages/LoginPage';
import HomePage from './component/pages/HomePage';
import SignupPage from './component/pages/SignupPage';
import SearchTripPage from './component/pages/SearchTripPage';
import CreateTripPage from './component/pages/CreateTripPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
 
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/searchtrip" component={SearchTripPage} />
          <Route path="/createtrip" component={CreateTripPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
