import './App.css';
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <>
        <Navbar/>
        <Home id="home"/>
    </>
  );
}


export default App;
