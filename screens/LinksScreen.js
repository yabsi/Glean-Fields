import React from 'react';
import { ScrollView, Button, StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';

export default class LinksScreen extends React.Component {

  static navigationOptions = {
    title: 'Fields',
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const url = 'http://35.208.38.242:3000/fields'

    fetch(
      url
    ).then(
      (response) => response.json()
    ).then(
      (response) => {
        let values = response.values
        values = values.map(val => ({ id: val.id, name: val.name }))
        this.setState(state => ({ fields: values }))
      }
    ).catch(
      (error) => console.log(error)
    );
  }

  onPressField(id, name) {
    this.props.navigation.navigate('FarmDetailsView', { field: { id, name } });
  }

  getButtons() {
    return this.state.fields.map(field => (
      <View style={styles.fieldContainer} key={field.id}>
        <Button
          key={field.id}
          title={field.name}
          onPress={() => this.onPressField(field.id, field.name)}
          color="#841584"
        />
      </View>
    ));
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {
          (this.state && this.state.fields) ?
            this.getButtons() :
            (<Progress.Circle thickness={30} color='#841584' style={styles.spinner} size={300} indeterminate={true} />)
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
  fieldContainer: {
    flex: 1,
    paddingBottom: 20,
    backgroundColor: '#fff',
    marginRight: 40,
    marginLeft: 40,
    alignContent: 'center'
  },
  spinner: {
    alignItems: 'center'
  }
});
