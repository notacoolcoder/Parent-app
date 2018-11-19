import React from "react" ;
import "./index.css" ;

export default class GallerySub extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      floderName : "" ,
    }
  }

  componentDidMount(){
    console.log("log", this.props.match.params.folder);
  }

  render(){
    return(
      <div>
      ad
      </div>
    )
  }
}
