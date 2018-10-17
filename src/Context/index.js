import React, { Component } from "react";

const DataContext = React.createContext();

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      id: ""
    };
  }

  setData = data => {
    this.setState({ data });
  };
  activateStudent = id => {
    console.log("id--");

    this.setData({ id });
  };

  render() {
    return (
      <div>
        <DataContext.Provider
          value={{
            data: this.state.data,
            setData: this.setData,
            activateStudent: this.state.activateStudent
          }}
        >
          {this.props.children}
        </DataContext.Provider>
      </div>
    );
  }
}

export const Consumer = DataContext.Consumer;
