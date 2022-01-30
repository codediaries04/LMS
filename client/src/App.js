import React, { useReducer, createContext } from 'react'
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Learn from './components/Learn';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Logout from './components/Logout';
import './App.css';
import { initialState, reducer } from '../src/reducer/useReducer';

export const UserContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (

    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Switch>
          <div className='App'>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/learn">
              <Learn />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
          </div>
        </Switch>
      </UserContext.Provider>
    </>
  )
}

export default App
