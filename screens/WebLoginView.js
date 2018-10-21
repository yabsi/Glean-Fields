import React from 'react';
import { WebView } from 'react-native';

export default class WebLoginView extends React.Component {
    constructor(props) {
        super(props);
    }

    _onNavigationStateChange(webViewState) {
        const index = webViewState.url.indexOf('oauth_verifier')
        if (index > -1) {
            const verifier = webViewState.url.substring(index + 15)
            this.setState(state => ({ ...state, verifier }))
        }
    }

    render() {
        return (
            (this.state && this.state.verifier) ?
                (this.props.navigation.navigate('LinksScreen', { verifier: this.state.verifier })) :
                (<WebView
                    onNavigationStateChange={this._onNavigationStateChange.bind(this)}
                    source={{ uri: `https://my.deere.com/consentToUseOfData?oauth_token=${this.props.navigation.getParam('requestToken', '')}` }}
                />)
        );
    }
}
