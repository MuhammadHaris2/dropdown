import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

const App= ()=>{
    return(
        <>
        <Router>
        
        <div className="app">
            <Switch>
            <Route path="/Services">Services</Route>
            <Route path="/contact">Contact</Route>
            <Route path="/signup">Signup</Route>
            <Route path="/about">About</Route>
            <Route path="/marketing">Marketing</Route>
            <Route path="/">

            <Navbar/>
            
            </Route>
            </Switch>
        </div>
        </Router>
        </>
    )
}

export default App;