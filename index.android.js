 import React, { Component } from 'react';
 import {
   Dimensions,
   AppRegistry
 } from 'react-native';

 import App from './app/components/App';

 export default class sidemenu extends Component {
   constructor(props) {
     super(props);

   }

   render() {
     return (
       <App />
     );
   }
 }
AppRegistry.registerComponent('sidemenu', () => sidemenu);
