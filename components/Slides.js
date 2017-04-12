import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Image } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {

  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title="Explore!"
          raised
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
          key={[slide.text, slide.image]}
          style={[styles.slideStyle,{backgroundColor: slide.color}]}>
            <Text style={styles.slideText}> {slide.text} </Text>
            {/* {this.renderFirstSlide(index)} */}
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
    marginTop: 15
  }
};

export default Slides;
