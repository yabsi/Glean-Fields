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
    // TODO: Remove hardcoding eventually
    const access_token = '535766a0-7ce3-4607-a8b3-d31d6f75ed33'
    const access_token_secret = '6MhPBRrIVL/X9aFNEG838O6yVcmGxFLQ0aaR9DMLSQAR8QeXjVP1OVBTSXESm+WhkCy7DXuzxD6yxzCF2HtsRFaeUA2+Tw1U6wS32FIqTns='
    const url_to_proxy = 'https://sandboxapi.deere.com/platform/organizations/223031/farms'

    const url = 'https://4yobgfho99.execute-api.us-east-2.amazonaws.com/default/oAuthSignRequestGet'
    const params = `?accessToken=${access_token}&accessTokenSecret=${access_token_secret}&url=${url_to_proxy}`
    fetch(
      url + params
    ).then(
      (response) => response.json()
    ).then(
      (response) => console.log(response)
    ).catch(
      (error) => console.log(error)
    );

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
    // console.log(this.props.navigation)
    this.props.navigation.navigate('FarmDetailsView', { farm_id: id });
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
    // console.log(this.state);
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
