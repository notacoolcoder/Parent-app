import firebase from "firebase";

var config = {
  apiKey: "AIzaSyDV9lao9VAIXNCKrDM-ogOwn0f1CWkBo3Y",
  authDomain: "parentapp-a4061.firebaseapp.com",
  databaseURL: "https://parentapp-a4061.firebaseio.com",
  projectId: "parentapp-a4061",
  storageBucket: "parentapp-a4061.appspot.com",
  messagingSenderId: "49868107115"
};
firebase.initializeApp(config);

export const messaging = firebase.messaging();
