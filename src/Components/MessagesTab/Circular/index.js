import React, { Component } from "react";
import ExpandableCard from "../../ExpandableCard/ExpandableCard";
import "./index.css";
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
    var data = {
      phoneNumber: "9544330995",
      offset: 0,
      count: 5,
      schoolId: 9
    };
    this.setState({
      date: new Date().toString().slice(0, 15)
    });
    fetch("http://test.ssdiary.com/ssdiary/parentApp/circulars/countwise/", {
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
      });
  }
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
