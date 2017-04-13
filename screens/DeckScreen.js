import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button, Icon } from 'react-native-elements';
import Swipe from '../components/Swipe';
import * as actions from '../actions';

class DeckScreen extends Component {

  renderCard(camp) {
    const initialRegion = {
      longitude: camp.RecAreaLongitude,
      latitude: camp.RecAreaLatitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
  }
  console.log(initialRegion);
  return (
  <Card title={camp.RecAreaName}>
    <View style={{ height: 250 }}>
      <MapView
        scrollEnabled={false}
        style={{ flex: 1 }}
        cacheEnabled={Platform.OS === 'android' ? true : false}
        initialRegion={initialRegion}
      >
      </MapView>
    </View>
    <View style={styles.detailWrapper}>
      <Text>{camp.RecAreaPhone}</Text>
      <Text>Updated: {camp.LastUpdatedDate}</Text>
    </View>
    <Text
      numberOfLines={4}
      style={{ marginTop: 20 }}
      >
      {camp.RecAreaDescription
        .replace(/<b>/g, '')
        .replace(/<\/b/g, '')
        .replace(/<p>/g, '')
        .replace(/<\/p/g, '')
        .replace(/<span lang="EN">/g, '')
        .replace(/<\/span>/g, '')
        .replace(/<a>/g, '')
        .replace(/<\/a>/g, '')
        .replace(/&nbsp/g, '')
        .replace(/<em>/g, '')
        .replace(/<\/em>/g, '')
        .replace(/<strong>/g, '')
        .replace(/<\/strong>/g, '')
      }
    </Text>
  </Card>
);
}

renderNoMoreCards = () => {
  return (
    <Card title="No More Cards">
      <Button
        title="Back To Map"
        large
        // icon={{ name: 'my-location' }}
        backgroundColor="#00BCD4"
        onPress={() => this.props.navigation.navigate('map')}
      />
    </Card>
  );
}

  render() {
    return (
      <View>
          <Swipe
          data={this.props.camps}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          // onSwipeRight={job => this.props.likeJob(job)}
          keyProp="RecAreaID"
            />
      </View>
    )
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
};

function mapStateToProps({ camps }) {
  return { camps: camps.RECDATA };
}

export default connect(mapStateToProps, actions)(DeckScreen);
