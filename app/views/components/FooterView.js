import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class FooterView extends Component {

    constructor(props){

        super(props);
    }

    render() {

        return (
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>
                    That’s all for now! This is a brand new project
                    and more articles will be coming soon. If
                    you would like to be notified by e-mail of
                    updates, sign up for the....
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        justifyContent: 'flex-start',        
        marginTop: 10,
        padding: 20
    }
});