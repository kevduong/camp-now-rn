import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
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
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }
  render() {
    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
    )
  }
}


export default WelcomeScreen;
