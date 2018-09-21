import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Appbar from ".././Components/Appbar"
import Home from ".././Components/Home"
import Messages from "../Components/MessagesTab"

export default class  extends Component {
    
      render() {
    
       
    
        return (
          <div >
           
              <Router>
                  <Switch>
                  <Route exact path="/home" component={Home}/>
                  <Route  path="/" component={Messages}/>
                      
                  </Switch>
              </Router>
          </div>
        );
      }
    }