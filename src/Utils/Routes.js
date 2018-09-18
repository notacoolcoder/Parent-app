import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Appbar from ".././Components/Appbar"
import Home from ".././Components/Home"

export default class  extends Component {
    
      render() {
    
       
    
        return (
          <div >
              <Appbar/>
              <Router>
                  <Switch>
                      <Route exact path="/" component={Home}/>
                  </Switch>
              </Router>
          </div>
        );
      }
    }