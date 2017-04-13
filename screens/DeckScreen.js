import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class DeckScreen extends Component {
  render() {
    return (
      <View>
        <Text>DeckScreen</Text>
      </View>
    )
  }
}

function mapStateToProps({ camps }) {
  return { camps: camps.recdata };
}

export default DeckScreen;
