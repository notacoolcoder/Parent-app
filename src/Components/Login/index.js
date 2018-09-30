import React, { Component } from "react";
import "./index.css";
import { Input, Icon } from "antd";
import createHistory from "history/createBrowserHistory";
const history = createHistory();

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
      parent: {},
      success: false
    };
  }

  componentDidMount() {}
  onChangefield(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onLogin = () => {
    fetch(
      "http://test.ssdiary.com/ssdiary/parentApp/login.html?userName=9544330995&password=ssdparent&schoolCode=0009",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(respose => {
        return respose.json();
      })
      .then(value => {
        if (value.success) {
          console.log(value);

          localStorage.setItem("data", JSON.stringify(value));
          this.props.history.push("/");
        }
      });
  };
  render() {
    return (
      <div className="flex">
        <h1
          style={{
            color: "white",
            textAlign: "center",
            width: "100%"
          }}
        >
          Parent Connect
        </h1>

        <div className="card">
          <div className="flex1">
            <div className="container">
              <div>
                <br />
                <br />
                <br />
                <Input
                  name="username"
                  placeholder="Enter your username"
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  onChange={this.onChangefield.bind(this)}
                  style={{ width: "100%" }}
                  placeholder="Username"
                />
              </div>
              <br />
              <br />
              <div>
                <Input
                  name="password"
                  placeholder="Enter your password"
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  onChange={this.onChangefield.bind(this)}
                  style={{ width: "100%" }}
                  placeholder="Password"
                />
                <br />
                <br />
                <br />

                <div
                  onClick={this.onLogin}
                  className="button"
                  style={{ textAlign: "center", fontWeight: "bold" }}
                >
                  <p>Login</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
