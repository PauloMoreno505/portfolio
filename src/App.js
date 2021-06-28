import './App.css';
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <>
        <Navbar/>
        <Home id="home"/>
    {/* <Router>
      <Switch>
        <Route exact path="/">
          <Home id="home"/>
        </Route>
        <Route exact path="/navbar" render={()=> (
          <Navbar/>
          )}>
        </Route>
      </Switch>
    </Router> */}
    </>
  );
}


export default App;
