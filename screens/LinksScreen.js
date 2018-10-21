import React from 'react';
import { ScrollView, Button, StyleSheet, View } from 'react-native';

export default class LinksScreen extends React.Component {

  static navigationOptions = {
    title: 'Farms',
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // TODO: Remove hardcoding eventually
    /*
    const access_token = '26493fcc-692c-44ca-b9a7-976ed6b7c1e9'
    const access_token_secret = 'kDo6d1dL2oLoIU/9oIQ5GXfROm2LPoTAAF7uURq5rk1nx4hy7RbyyCmIgjJaFYVfKDVh89s5lW9DEs4uhLWA37FVOkzxs5PacSQ++HhgqWE='
    const url_to_proxy = 'https://sandboxapi.deere.com:443/platform/'

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
    */


    let values = farmData.values
    values = values.map(val => ({ id: val.id, name: val.name }))
    this.setState(state => ({ farms: values }))
  }

  onPressFarm(id) {
    // console.log(this.props.navigation)
    this.props.navigation.navigate('FarmDetailsView', { farm: (this.state.farms.filter((e) => e.id = id))[0] });
  }

  getButtons() {
    return this.state.farms.map(farm => (
      <View style={styles.farmContainer} key={farm.id}>
        <Button
          key={farm.id}
          title={farm.name}
          onPress={() => this.onPressFarm(farm.id)}
          color="#841584"
        />
      </View>
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
  farmContainer: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    marginRight: 40,
    marginLeft: 40,
    alignContent: 'center'
  },
});

const farmData = { "links": [{ "rel": "self", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms" }], "total": 10, "values": [{ "@type": "Farm", "name": "JT", "id": "4641d448-0000-1000-4033-e1e1e11124e0", "links": [{ "@type": "Link", "rel": "self", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/4641d448-0000-1000-4033-e1e1e11124e0" }, { "@type": "Link", "rel": "fields", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/4641d448-0000-1000-4033-e1e1e11124e0/fields" }, { "@type": "Link", "rel": "clients", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/4641d448-0000-1000-4033-e1e1e11124e0/clients" }, { "@type": "Link", "rel": "owningOrganization", "uri": "https://sandboxapi.deere.com/platform/organizations/223031" }] }, { "@type": "Farm", "name": "Krohn", "id": "5b74f255-0000-1000-67f4-e1e1e1327288", "links": [{ "@type": "Link", "rel": "self", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/5b74f255-0000-1000-67f4-e1e1e1327288" }, { "@type": "Link", "rel": "fields", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/5b74f255-0000-1000-67f4-e1e1e1327288/fields" }, { "@type": "Link", "rel": "clients", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/5b74f255-0000-1000-67f4-e1e1e1327288/clients" }, { "@type": "Link", "rel": "owningOrganization", "uri": "https://sandboxapi.deere.com/platform/organizations/223031" }] }, { "@type": "Farm", "name": "---", "id": "21797e7a-f7ff-43d7-9ef1-0e981c6df71a", "links": [{ "@type": "Link", "rel": "self", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/21797e7a-f7ff-43d7-9ef1-0e981c6df71a" }, { "@type": "Link", "rel": "fields", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/21797e7a-f7ff-43d7-9ef1-0e981c6df71a/fields" }, { "@type": "Link", "rel": "clients", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/21797e7a-f7ff-43d7-9ef1-0e981c6df71a/clients" }, { "@type": "Link", "rel": "owningOrganization", "uri": "https://sandboxapi.deere.com/platform/organizations/223031" }] }, { "@type": "Farm", "name": "ben test", "id": "041816da-e18f-42f4-b480-e5abff81d599", "links": [{ "@type": "Link", "rel": "self", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/041816da-e18f-42f4-b480-e5abff81d599" }, { "@type": "Link", "rel": "fields", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/041816da-e18f-42f4-b480-e5abff81d599/fields" }, { "@type": "Link", "rel": "clients", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/041816da-e18f-42f4-b480-e5abff81d599/clients" }, { "@type": "Link", "rel": "owningOrganization", "uri": "https://sandboxapi.deere.com/platform/organizations/223031" }] }, { "@type": "Farm", "name": "---", "id": "4d705721-203d-45fa-8458-a4e8be3a1028", "links": [{ "@type": "Link", "rel": "self", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/4d705721-203d-45fa-8458-a4e8be3a1028" }, { "@type": "Link", "rel": "fields", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/4d705721-203d-45fa-8458-a4e8be3a1028/fields" }, { "@type": "Link", "rel": "clients", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/4d705721-203d-45fa-8458-a4e8be3a1028/clients" }, { "@type": "Link", "rel": "owningOrganization", "uri": "https://sandboxapi.deere.com/platform/organizations/223031" }] }, { "@type": "Farm", "name": "Jolly Hardy", "id": "00000000-0000-0000-0000-000000000000", "links": [{ "@type": "Link", "rel": "self", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/00000000-0000-0000-0000-000000000000" }, { "@type": "Link", "rel": "fields", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/00000000-0000-0000-0000-000000000000/fields" }, { "@type": "Link", "rel": "clients", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/00000000-0000-0000-0000-000000000000/clients" }, { "@type": "Link", "rel": "owningOrganization", "uri": "https://sandboxapi.deere.com/platform/organizations/223031" }] }, { "@type": "Farm", "name": "Apply", "id": "278baa82-25c6-4394-a8c7-9064ff590c1c", "links": [{ "@type": "Link", "rel": "self", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/278baa82-25c6-4394-a8c7-9064ff590c1c" }, { "@type": "Link", "rel": "fields", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/278baa82-25c6-4394-a8c7-9064ff590c1c/fields" }, { "@type": "Link", "rel": "clients", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/278baa82-25c6-4394-a8c7-9064ff590c1c/clients" }, { "@type": "Link", "rel": "owningOrganization", "uri": "https://sandboxapi.deere.com/platform/organizations/223031" }] }, { "@type": "Farm", "name": "Demo Farm", "id": "f2b4494b-5eca-42bd-8692-1d78aa771685", "links": [{ "@type": "Link", "rel": "self", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/f2b4494b-5eca-42bd-8692-1d78aa771685" }, { "@type": "Link", "rel": "fields", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/f2b4494b-5eca-42bd-8692-1d78aa771685/fields" }, { "@type": "Link", "rel": "clients", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/f2b4494b-5eca-42bd-8692-1d78aa771685/clients" }, { "@type": "Link", "rel": "owningOrganization", "uri": "https://sandboxapi.deere.com/platform/organizations/223031" }] }, { "@type": "Farm", "name": "Support Farm", "id": "9626c994-c149-4ab6-8b7b-0fb2c752d6d9", "links": [{ "@type": "Link", "rel": "self", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/9626c994-c149-4ab6-8b7b-0fb2c752d6d9" }, { "@type": "Link", "rel": "fields", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/9626c994-c149-4ab6-8b7b-0fb2c752d6d9/fields" }, { "@type": "Link", "rel": "clients", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/9626c994-c149-4ab6-8b7b-0fb2c752d6d9/clients" }, { "@type": "Link", "rel": "owningOrganization", "uri": "https://sandboxapi.deere.com/platform/organizations/223031" }] }, { "@type": "Farm", "name": "Is", "id": "e317d549-3ab2-4368-b188-f38e3be23fd1", "links": [{ "@type": "Link", "rel": "self", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/e317d549-3ab2-4368-b188-f38e3be23fd1" }, { "@type": "Link", "rel": "fields", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/e317d549-3ab2-4368-b188-f38e3be23fd1/fields" }, { "@type": "Link", "rel": "clients", "uri": "https://sandboxapi.deere.com/platform/organizations/223031/farms/e317d549-3ab2-4368-b188-f38e3be23fd1/clients" }, { "@type": "Link", "rel": "owningOrganization", "uri": "https://sandboxapi.deere.com/platform/organizations/223031" }] }] }
