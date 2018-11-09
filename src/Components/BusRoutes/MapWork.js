import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");
class MapWork extends Component{
  constructor(props){
    super(props);
    this.state={
      data:[{lat:21,lon:22},{lat:23,lon:25},{lat:26,lon:50},{lat:21,lon:22},{lat:23,lon:25},{lat:26,lon:50},{lat:21.2131,lon:22.2131},{lat:29,lon:75},{lat:16,lon:20},{lat:12,lon:11},{lat:14,lon:14},{lat:43,lon:32},{lat:17,lon:19},{lat:35,lon:2},{lat:23,lon:30}]
    }
  }
  componentDidMount(){
    console.log(this.props.data);
    
    
  }
  render(){
    return(
      <GoogleMap
      defaultZoom={20 }
      defaultCenter={{ lat:10.5215899, lng: 76.2047647 }}
    >
     
     <MarkerClusterer
      style={{color:"#fff"}}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {this.props.data.map((marker,index) => (
        <Marker
          key={index}
          position={{ lat: marker.lat, lng: marker.lon }}
        />
      ))}
    </MarkerClusterer>
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