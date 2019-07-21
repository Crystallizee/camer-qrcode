import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MainNavigator from "./routers/Router";
import firebase from 'firebase';

class app extends Component {

  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyAodC7jkFF8sSZEAOkZkfS-fjecf8oQ9Fw",
      authDomain: "manager-61017.firebaseapp.com",
      databaseURL: "https://manager-61017.firebaseio.com",
      projectId: "manager-61017",
      storageBucket: "",
      messagingSenderId: "1000982056541",
      appId: "1:1000982056541:web:3aaa6b511b6a1726"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  static navigationOptions = {
    title: 'Welcome',
  };

    render() {
      return (
        <MainNavigator />
      );
    }
}

export default app;
