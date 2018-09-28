import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Routes from "./Utils/Routes";
registerServiceWorker();
ReactDOM.render(<MuiThemeProvider><Routes/></MuiThemeProvider>, document.getElementById("root"));
