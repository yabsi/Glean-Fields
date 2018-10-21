import React from 'react';
import { ScrollView, StyleSheet, View, Button, WebView } from 'react-native';
import { Header, Text } from 'react-native-elements'
import { WebBrowser } from 'expo'

export default class WebDonationView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <WebView
                injectedJavaScript={`
                    document.getElementsByName("first_name")[0].value="Yousef";
                    document.getElementsByName("last_name")[0].value="???";
                    document.getElementsByName("phone")[0].value="5556667777";
                    document.getElementsByName("farmer_email")[0].value="example@example.com";
                    document.getElementsByName("comments")[0].value="$1000 of crops";
                    document.getElementsByClassName("select2-chosen")[0].value="IA";
                `}
                source={{ uri: 'https://endhunger.org/DB_Registration/Farmers_view.php' }}
            />
        );
    }
}
