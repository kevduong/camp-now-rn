# Camp Now (React Native)

Explore Your Neighborhood. Discover The World.

Find all the great campsites, RV parks, Lodging, and recreational parks the world has to offer.

## Context

For my final project at UCLA, I developed an iOS and Android application that is built using React Native and Redux.  

Camp Now was inspired by my [first web application](https://github.com/kevduong/camp-now) with Bryce Richards.  The mobile version's features are a variations of the web app. 

Users are authenticated by using Facebook’s OAuth.  The user’s token is captured and stored asynchronously in the reducer. 
Screen components help organize the individual pages on the app and the flow of the user experience. 
The mobile version uses the Map component built by Airbnb at [airbnb/react-native-maps](https://github.com/airbnb/react-native-maps).  
Based on the user’s location and where they’re dragging on the map, it records the user’s longitude and latitude on the Google Firebase backend.  

The swiping-cards work similarly to Tinder. The user is swiping left or right through recreational areas and nearby campgrounds.

## Install


> 1. npm install
> 2. I used Expo as a simulator on my machine. Head over to the [Expo Quick Start guide](https://docs.expo.io/versions/v16.0.0/introduction/installation.html) to install Expo for Xcode (iOS) and Genymotion (Android)  


## To Use

Once you have the simulator running through Expo, you'll be greeted with a Welcome Screen.  Swipe right a few times to login using Facebook.

You'll be redirected to a map where you can tap the Discover button to find nearby campsites and recreational parks.  

## Technology

* React JS and React Native
* Redux
* Facebook OAuth
* Firebase
 


