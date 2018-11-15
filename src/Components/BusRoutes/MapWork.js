import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polyline,
  lineSymbol
} from "react-google-maps";
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");
class MapWork extends Component{
  constructor(props){
    super(props);
    this.state={
      data:[{ lat: 10.05298765935, lng: 76.083756616339 },{ lat: 10.2169884797185, lng: 76.056727493181 }],
       value:{}
    }
  }
  componentDidMount(){
   console.log(this.props.data);
   console.log(this.props.last)
    // this.state.path.push({lat:this.props.data[0].lat,lng:this.props.data[0].lon},{lat:this.props.data[r].lat,lng:this.props.data[r].lon})
   
  }
  render(){
    
    
    
    return(
      <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: this.props.last.lat,  lng: this.props.last.lon }}>
     
     <Marker position={{ lat: this.props.last.lat, lng: this.props.last.lon }} />
     
      
      
      {this.props.data.map(p=>(

        <Polyline
        path={p}
        geodesic={true}
        options={{
          strokeColor: "#3b5998",
          strokeOpacity: 1,
           strokeWeight: 5,
          
            
          }}
          
          />
          ))}
        
   
    </GoogleMap>
    )
  }
}


{/* <MapWithAMarker
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/> */}
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyC7GkW3KZMvbakRdzKeDbV-61l1-6UKzE0"
// })(MapWork);
export default withScriptjs(withGoogleMap(MapWork));