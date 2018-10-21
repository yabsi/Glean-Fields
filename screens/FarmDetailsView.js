import React from 'react';
import { ScrollView, StyleSheet, View, Button } from 'react-native';
import { Header, Text } from 'react-native-elements'
import { WebBrowser } from 'expo'

export default class FarmDetailsView extends React.Component {

    constructor(props) {
        super(props);
    }

    _handleDonatePress = () => {
        WebBrowser.openBrowserAsync(
            'https://endhunger.org/DB_Registration/Farmers_view.php'
        );
    };

    componentDidMount() {
        const { params } = this.props.navigation.state
        const id = params.field.id

        const base_url = 'http://35.208.38.242:3000/field_details'
        const url = `${base_url}?farm_id=${id}`
        fetch(url)
            .then(response => response.json())
            .then(response => {
                if (response.values.length == 0) {
                    this.setState(state => ({ validArea: false, area: 0 }))
                } else {
                    const area = response.values[0].area.valueAsDouble
                    this.setState(state => ({ ...state, validArea: true, area: area }))
                }
            })
            .catch(error => console.log(error))

        const base_url2 = 'http://35.208.38.242:3000/field_operations'
        const url2 = `${base_url2}?farm_id=${id}`
        fetch(url2)
            .then(response => response.json())
            .then(response => {
                if (response.values.length == 0) {
                    this.setState(state => ({ ...state, validHarvest: false }))
                } else {
                    const most_recent = response.values[response.values.length - 1]
                    this.setState(state => ({ ...state, validHarvest: true }))

                    const base_url3 = 'http://35.208.38.242:3000/harvest'
                    const url3 = `${base_url3}?operation_id=${most_recent.id}`
                    fetch(url3)
                        .then(response => response.json())
                        .then(response => {
                            console.log(response)
                            // if (response.values.length == 0) {
                            //     this.setState(state => ({ ...state, validHarvest: false, mostRecentHarvestId: -1 }))
                            // } else {
                            //     const most_recent = response.values[response.values.length - 1]
                            //     console.log(most_recent.id)
                            //     this.setState(state => ({ ...state, validHarvest: true, mostRecentHarvestId: most_recent.id }))
                            // }
                        })
                        .catch(error => console.log(error))
                }
            })
            .catch(error => console.log(error))
    }

    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <Header
                        centerComponent={{ text: `Farm Details for '${params.field.name}'`, style: { color: '#fff' } }}
                    />
                    <View>
                        {/* <Text style={styles.fieldContent}>Farm ID: {params.field.id}</Text> */}
                        {
                            (this.state && this.state.validArea) ?
                                (<Text style={styles.fieldContent}>Area: {this.state.area}</Text>) :
                                (<Text style={styles.fieldContent}>No data available</Text>)
                        }
                        <Button
                            title='Donate'
                            onPress={this._handleDonatePress}
                            color='#841584'
                        />
                    </View>
                </ScrollView >
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    fieldContent: {
        textAlign: 'center',
        padding: 15,
        fontSize: 16,
        lineHeight: 10
    }
});
