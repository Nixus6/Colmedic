// import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar/navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './views/Home/home'
import Agendar from './views/Agendar/agendarform'
import Login from "./views/login/login"
import SignUp from "./views/UserRegister/user"

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        {/* <Route path="/"/>
        <Route path="/login"/> */}
        <Route path="/login" component={Login} />
        <Route path="/createuser" component={SignUp} />
        <Route path="/home" component={Home} />
        <Route path="/agendar" component={Agendar} />
      </Switch>
    </Router>
  );
}

export default App;
