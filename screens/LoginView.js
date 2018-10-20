import React from 'react';
import { View, Button, TextInput } from 'react-native';
import { WebBrowser } from 'expo';

export default class LoginView extends React.Component {

    constructor(props) {
        super(props);
    }

    _handleLoginPress = () => {
        console.log('handle login press');
        console.log(this.state);
        console.log(`https://my.deere.com/consentToUseOfData?oauth_token=${this.state.requestToken}`)
        WebBrowser.openBrowserAsync(
            `https://my.deere.com/consentToUseOfData?oauth_token=${this.state.requestToken}`
        );
    };

    componentDidMount() {
        fetch(
            'https://4yobgfho99.execute-api.us-east-2.amazonaws.com/default/firstLegHandler'
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
        console.log(this.state);
        return (
            <View>
                <Button
                    onPress={this._handleLoginPress}
                    title="Login"
                    color="#841584"
                    accessibilityLabel="Login"
                />
            </View>
        )
    }

}
