import './App.css';
import Header  from "./components/header/Header.js";
import Home from "./components/home/Home.js";
import Checkout from "./components/checkout/Checkout.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/login/Login';

function App() {
  return (
    <Router>
      <div className="app">
       
        
        <Switch>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
