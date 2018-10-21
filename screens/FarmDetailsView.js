import React from 'react';
import { ScrollView, StyleSheet, View, Button } from 'react-native';
import { Text } from 'react-native-elements'
import * as Progress from 'react-native-progress';

export default class FarmDetailsView extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Field Details',
    };

    _handleDonatePress = () => {
        this.props.navigation.navigate('WebDonationView')
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
                            let cropName = response.cropName.toLowerCase()
                            cropName = cropName.replace(/[^A-Za-z]/g, ' ')
                            cropName = cropName.charAt(0).toUpperCase() + cropName.slice(1)
                            const cropDate = (new Date(response.endDate)).toDateString()
                            this.setState(state => ({ ...state, cropName, cropDate }))
                        })
                        .catch(error => console.log(error))
                }
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <View>
                        {(this.state && this.state.validArea) ?
                            (<Text style={styles.fieldContent}>Area Harvested: {this.state.area}</Text>) :
                            (<Progress.Circle color='#841584' style={styles.spinner} size={30} indeterminate={true} />)
                        }
                        {(this.state && this.state.validHarvest && this.state.cropDate) ?
                            (<Text style={styles.fieldContent}>Date Harvested: {this.state.cropDate}</Text>) :
                            (<Progress.Circle color='#841584' style={styles.spinner} size={30} indeterminate={true} />)
                        }
                        {(this.state && this.state.validHarvest && this.state.cropName) ?
                            (<Text style={styles.fieldContent}>Crop Harvested: {this.state.cropName}</Text>) :
                            (<Progress.Circle color='#841584' style={styles.spinner} size={30} indeterminate={true} />)
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
    spinner: {
        alignItems: 'center'
    },
    fieldContent: {
        textAlign: 'center',
        padding: 15,
        fontSize: 14,
        lineHeight: 14
    }
});
