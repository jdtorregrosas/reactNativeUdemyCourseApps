import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = {
      email: '',
      password: '',
      error: '',
      loading: false
    }

    onButtonPress() {
      this.setState({ error: '', loading: true });
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
    }
    onLoginSuccess() {
      this.setState({
        email: '',
        password: '',
        loading: false,
        error: ''
      });
    }
    onLoginFail() {
      this.setState({
        error: 'Authentication Error!',
        loading: false
      });
    }
    renderButton() {
      if (this.state.loading) {
        return <Spinner size='small' />;
      }
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Log in!!
        </Button>
      );
    }
    render() {
      return (
        <Card>
          <CardSection>
            <Input
              placeholder="user@email.com"
              label="Email"
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
            />
          </CardSection>
          <Text style={styles.errorStyle}>{this.state.error}</Text>
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      );
    }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    color: '#F00',
    alignSelf: 'center'
  }
};

export default LoginForm;
