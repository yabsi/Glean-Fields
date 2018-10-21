import React from 'react';
import { ScrollView, StyleSheet, View, Button } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Farms',
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState(state => ({
      farms: [
        {
          id: 1,
          name: 'lmao'
        },
        {
          id: 2,
          name: 'epic'
        }
      ]
    }))
  }

  onPressFarm(id) {
    console.log(id);
  }

  getButtons() {
    return this.state.farms.map(farm => (
      <Button
        key={farm.id}
        title={farm.name}
        onPress={() => this.onPressFarm(farm.id)}
        color="#841584"
      />
    ));
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView style={styles.container}>
        {
          (this.state && this.state.farms) ? this.getButtons() : <View></View>
        }
      </ScrollView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
