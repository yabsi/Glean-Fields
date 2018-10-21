import React from 'react';
import { ScrollView, StyleSheet, View, Button } from 'react-native';
import { Header, Text } from 'react-native-elements'
import LinksScreen from './LinksScreen';

export default class FarmDetailsView extends React.Component {
    static navigationOptions = {
        title: '',
    };

    constructor(props) {
        super(props);
    }

    // onPressBack() {
    //     this.props.navigation.navigate(LinksScreen)
    // }

    render() {
        // console.log(this.props.farm.id);
        const { params } = this.props.navigation.state;
        console.log(params)
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <Header
                        centerComponent={{ text: `Farm Details for '${params.farm.name}'`, style: { color: '#fff' } }}
                    />
                    <View>
                        <Text style={styles.farmContent}>Farm ID: {params.farm.id}</Text>
                    </View>
                    {/* <Button
                        title="Back"
                        onPress={() => this.props.navigation.navigate('LinksScreen')}
                        color="#841584"
                    /> */}
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
    farmContent: {
        textAlign: 'center',
        padding: 15,
        fontSize: 16,
        lineHeight: 10
    }
});
