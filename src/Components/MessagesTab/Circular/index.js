import React, { Component } from "react";
import ExpandableCard from "../../ExpandableCard/ExpandableCard";
import "./index.css";
import { baseUrl } from "./../../../Api";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      messages: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      ],
      date: ""
    };
  }
  componentDidMount() {
    this.setState({
      date: new Date().toString().slice(0, 15)
    });
    //this.setState({ data: this.getData() });
    navigator.onLine ? this.getData() : this.getCachedData();
  }

  getCachedData = () => {
    var data = localStorage.getItem("circular");
    this.setState({ data: JSON.parse(data) });
  };

  getData = () => {
    var data = {
      phoneNumber: localStorage.getItem("phone"),
      offset: 0,
      count: 5,
      schoolId: 9
    };
    console.log("ethiii");

    fetch(baseUrl + "circulars/countwise/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(value => {
        console.log("------", value);

        this.setState({ data: value });
        localStorage.setItem("circular", JSON.stringify(value));
      })
      .catch(err => {
        console.log("err", err);
      });
  };
  render() {
    return (
      <div className="circular-main">
        {this.state.data.map(q => (
          <span>
            <div className="circular-date">{q.date}</div>
            <div className="circulars">
              {q.circularList.map(t => (
                <ExpandableCard message={t.message} />
              ))}
            </div>
          </span>
        ))}
      </div>
    );
  }
}
