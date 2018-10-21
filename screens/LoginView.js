import React from 'react';
import { View, Button, TextInput, Linking } from 'react-native';
import { WebBrowser } from 'expo';

export default class LoginView extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };

    constructor(props) {
        super(props);
    }

    _handleLoginPress = () => {
        // console.log(`https://my.deere.com/consentToUseOfData?oauth_token=${this.state.requestToken}`)
        WebBrowser.openBrowserAsync(
            `https://my.deere.com/consentToUseOfData?oauth_token=${this.state.requestToken}`
        );
    };

    componentDidMount() {
        const url = 'https://4yobgfho99.execute-api.us-east-2.amazonaws.com/default/firstLegHandler';
        Linking.addEventListener(url, () => console.log('linking called'));
        fetch(
            url
        ).then(
            (response) => response.json()
        ).then(
            (response) => {
                this.setState(state => {
                    return { ...response, ...state }
                })
            }
        ).catch(
            (error) => console.log(error)
        )
    }

    render() {
        // console.log(this.state);
        return (
            <View style={[{ width: "30%", margin: 10 }]}>
                <Button
                    disabled={!(this.state && this.state.requestToken)}
                    onPress={this._handleLoginPress}
                    title="Login"
                    color="#841584"
                    accessibilityLabel="Login"
                />
            </View>
        )
    }
}
