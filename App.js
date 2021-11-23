import './App.css';
import Home from './components/home';
import Nav from './components/nav';
import "bootstrap/dist/css/bootstrap.css";
import Exam from './components/exam';
import { Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <div style={{  backgroundColor: 'lightcyan'
    }} className="App">
        <Home />
        <Nav />
        <Switch>
        {/* <Route path="/exam" component={Exam}/> */}
        <Route exact path="/exam" component={Exam}/>
        {/* <Redirect from="/home" to="/" /> */}
        </Switch>
    </div>
  );
}

export default App;
