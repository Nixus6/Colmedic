// import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar/navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './views/Home/home'
import { Agendar } from './views/Agendar/agendar'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        {/* <Route path="/"/>
        <Route path="/login"/> */}
        <Route path="/home" component={Home} />
        <Route path="/agendar" component={Agendar} />
      </Switch>
    </Router>
  );
}

export default App;
