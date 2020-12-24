import React ,{ useEffect } from 'react';
import { BrowserRouter as Router ,Switch,Route,Link } from 'react-router-dom';
import Header from './components2/Header/Header';
import Home from './components2/Home/Home';
import Checkout from './components2/Checkout/Checkout';
import Login from './components2/Login/Login';
import CheckoutProduct from './components2/CheckoutProduct/CheckoutProduct';
import { useStateValue } from './components2/StateProvider/StateProvider';
import { auth } from './components2/Firebase/Firebase';

import './App.css';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
       <div className="app">
          <Switch>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/login"></Route>
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
