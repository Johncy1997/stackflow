/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View
} from 'react-native';
import AppContainer from './guidednav/navigators';
// import AppContainer from './src/navigators';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.disableYellowBox = true;
    console.ignoredYellowBox=true;
    return (
      <View style={{ flex: 1 }}>
        <AppContainer ref={nav => (this.primaryNavigator = nav)} />
      </View>
    );
  }
};

export default App;
