import React, { Component } from "react";

const DataContext = React.createContext();

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  setData = data => {
    this.setState({ data });
  };

  render() {
    return (
      <div>
        <DataContext.Provider
          value={{ data: this.state.data, setData: this.setData }}
        >
          {this.props.children}
        </DataContext.Provider>
      </div>
    );
  }
}

export const Consumer = DataContext.Consumer;
