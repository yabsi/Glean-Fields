import React from 'react';
import { ScrollView, StyleSheet, View, Button, WebView } from 'react-native';
import { Header, Text } from 'react-native-elements'
import { WebBrowser } from 'expo'

export default class WebLoginView extends React.Component {

    constructor(props) {
        super(props);
    }

    _onNavigationStateChange(webViewState) {
        const index = webViewState.url.indexOf('oauth_verifier')
        if (index > -1) {
            const verifier = webViewState.url.substring(index + 15)
            console.log(`Verifier: ${verifier}`)
            this.setState(state => ({ ...state, verifier }))
        }
    }

    render() {
        if (this.state && this.state.verifier) {
            this.props.navigation.navigate('LinksScreen', { verifier: this.state.verifier });
        }
        return (
            (this.state && this.state.verifier) ? (<View />) : (
                <WebView
                    onNavigationStateChange={this._onNavigationStateChange.bind(this)}
                    source={{ uri: `https://my.deere.com/consentToUseOfData?oauth_token=${this.props.navigation.getParam('requestToken', '')}` }}
                />)
        );
    }
}
