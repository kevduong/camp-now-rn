import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Image } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {

  renderFirstSlide(index) {
    if (index === 0) {
      return (
        <View>
          <Image
            source={require('../assets/img/camp-now-logo.png')}
            style={{
              marginTop: 50
            }}
              />
          </View>
      );
    }
  }

  renderSecondSlide(index) {
    if (index === 1) {
      return (
        <View>
          <Image
            source={require('../assets/img/mockup.png')}
            style={{
              marginTop: 50,
              width: 150,
              height: 300
            }}
              />
          </View>
      );
    }
  }

  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (

        <Button
          title="Explore"
          raised
          icon={{ name: 'terrain'}}
          buttonStyle={styles.buttonStyle}
          onPress={this.props.onComplete}
          />
      );
    }
  }
  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={[slide.text, slide.img]}
          style={[styles.slideStyle,{backgroundColor: slide.color}]}>
            <Text style={styles.slideText}> {slide.text} </Text>
            {this.renderFirstSlide(index)}
            {this.renderSecondSlide(index)}
            {this.renderLastSlide(index)}
      </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
          horizontal
          style={{ flex: 1 }}
          pagingEnabled
        >
          {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  slideText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center'
  },
  imgBackground: {
    width: SCREEN_WIDTH
  },
  buttonStyle: {
    backgroundColor: '#00BCD4',
    marginTop: 50
  }
};

export default Slides;
