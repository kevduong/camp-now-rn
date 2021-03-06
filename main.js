import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import LogoutScreen from './screens/LogoutScreen';
import ReviewScreen from './screens/ReviewScreen';

class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          logout: { screen: LogoutScreen }
          // review: {
          //   screen: StackNavigator({
          //     review: { screen: ReviewScreen },
          //     settings: { screen: SettingScreen }
          //   })
          // }
        })
      }
    }, {
      navigationOptions: {
        tabBar: {
          visible: false
         }
      },
      lazyLoad: true
    });

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator style={{ backgroundColor: '#455A64'}} />
        </View>
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
