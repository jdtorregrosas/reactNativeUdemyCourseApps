import React, { Component } from 'react';
import { View, Button } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner, Card } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedin: null
  };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBXcmf8FDm5COG_EkB_KAmwu_NBUaIJfhY',
      authDomain: 'auth-427bf.firebaseapp.com',
      databaseURL: 'https://auth-427bf.firebaseio.com',
      storageBucket: 'auth-427bf.appspot.com',
      messagingSenderId: '314639660600'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedin: true });
      } else {
        this.setState({ loggedin: false });
      }
    });
  }
  renderContent() {
    switch (this.state.loggedin) {
      case true:
        return <Button title='Log Out' onPress={() => { firebase.auth().signOut(); }} />;
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }
  render() {
    return (
      <View>
        <Header headerText="Login App" />
        <Card>
          {this.renderContent()}
        </Card>
      </View>
    );
  }
}

export default App;
