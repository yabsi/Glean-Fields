import React from 'react';
import { ScrollView, StyleSheet, Text, Button, View, Image } from 'react-native';
import LinksScreen from './LinksScreen';

export default class FarmDetailsView extends React.Component {
    static navigationOptions = {
        title: 'Details',
    };

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.farm_id);
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <View style={styles.welcomeContainer}>
                        <Image
                            source={
                                __DEV__
                                    ? require('../assets/images/robot-dev.png')
                                    : require('../assets/images/robot-prod.png')
                            }
                            style={styles.welcomeImage}
                        />
                    </View>
                    <Text>Farm ID: {params.farm_id}</Text>
                    {/* <Button
                        title="Back"
                        onPress={this.onPressBack}
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
        paddingTop: 15,
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
    }
});
