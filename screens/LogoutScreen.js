import React, { Component } from 'react';
import { View, Text, AsyncStorage, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Button, Icon } from 'react-native-elements';
import * as actions from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;

class LogoutScreen extends Component {

  onButtonPress = ({ auth }) => {
    AsyncStorage.removeItem('fb_token');
    this.setState({ token: null });
    this.props.navigation.navigate('welcome');

  }

  renderButton() {
    return (
      <Button
        title="Logout"
        raised
        icon={{ name: 'no-encryption' }}
        buttonStyle={styles.buttonStyle}
        onPress={this.onButtonPress}
      />
  );
  }
  render() {
    return (
      <View>
        <Text style={styles.textStyle}>Are you sure?</Text>
        {this.renderButton()}
      </View>
    )
  }
}

const styles = {
  textStyle: {
    fontSize: 24,
    paddingTop: 300,
    color: 'red',
    textAlign: 'center'
  },
  buttonStyle: {
    backgroundColor: 'red',
    marginTop: 15
  }
};

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(LogoutScreen);
