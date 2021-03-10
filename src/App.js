import logo from './logo.svg';
import './App.css';
import Top from './components/Home/Top';
import Navbar from './components/Home/Navbar';
import Carouel from './components/Home/Carousels';
import Category from './components/Home/Category';
import Brand from './components/Home/Brands';
import Index from './components/Product/Index'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/">
            <Product />
          </Route>
          <Route path="/product">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <Top/>
      <div id="container">
        <Navbar/>
        <Carouel/>
        <Category/>
        <Brand/>
      </div>
    </div>
  );
}

function Product() {
  return (
    <div className="App">
      <Top/>
      <div id="container">
        <Navbar/>
        <Index/>
      </div>
    </div>
  );
}

export default App;
