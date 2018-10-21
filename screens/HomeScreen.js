import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

import LoginView from './LoginView'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Glean Fields',
    headerStyle: {
      backgroundColor: '#841584',
    },
    headerTitleStyle: {
      padding: 30,
      flex: 1,
      fontSize: 36,
      textAlign: 'center',
      color: 'white'
    },
    // headerTitleContainerStyle: {
    // alignItems: 'center',
    // alignContent: 'center'
    // }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/logo.png')
                  : require('../assets/images/logo.png')
              }
              style={styles.welcomeImage}
            />
          </View>
          <View style={styles.loginContainer}>
            <LoginView navigation={this.props.navigation} />
          </View>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  loginContainer: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 3,
  }
});
