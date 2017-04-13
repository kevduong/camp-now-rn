import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  {
    text: 'Welcome to Camp Now',
    color: '#607D8B'
  },
  { text: 'Explore Your Neighborhood. Discover The World.',
    color: '#455A64'
  },
  { text: 'Swipe to find the your next camping destination.',
    color: '#607D8B'
  }
];

class WelcomeScreen extends Component {
  state = { token: null }

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('map');
      this.setState({ token })
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }
    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
    )
  }
}


export default WelcomeScreen;
