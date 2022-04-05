import './App.css';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Product from './pages/Product';
import Register from './pages/Register';
import Home from './pages/Home';
import Productlist from './pages/Productlist';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
    <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products/:category">
            <Productlist />
          </Route>
          <Route exact path="/product/:id">
            <Product />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
        </Switch>
    </Router>
    </>
    );
  }

export default App;
