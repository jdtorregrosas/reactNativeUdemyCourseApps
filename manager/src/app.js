import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBeOK0zs6i3gcWV3EMCOpJRloZ3yYkJ2BA',
      authDomain: 'manager-f672d.firebaseapp.com',
      databaseURL: 'https://manager-f672d.firebaseio.com',
      storageBucket: 'manager-f672d.appspot.com',
      messagingSenderId: '877503675449'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello World</Text>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
