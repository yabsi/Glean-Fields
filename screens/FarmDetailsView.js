import React from 'react';
import { ScrollView, StyleSheet, View, Button } from 'react-native';
import { Header, Text } from 'react-native-elements'

export default class FarmDetailsView extends React.Component {

    constructor(props) {
        super(props);
    }

    onPressDonate() {
        console.log('Donating')
    }

    render() {
        const { params } = this.props.navigation.state;
        console.log(params)
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <Header
                        centerComponent={{ text: `Farm Details for '${params.field.name}'`, style: { color: '#fff' } }}
                    />
                    <View>
                        <Text style={styles.fieldContent}>Farm ID: {params.field.id}</Text>
                        <Button
                            title='Donate'
                            onPress={this.onPressDonate}
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
