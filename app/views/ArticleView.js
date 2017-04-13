'use strict';

import React, {
    Component
} from 'react';
import {
    View,
    ScrollView,
    TouchableHighlight, 
    Text, 
    StyleSheet
} from 'react-native';

export default class ArticleView extends Component {

    constructor(props){

        super(props);
    }

    onPressSendRequest() {

    }

    componentDidMount() {

      // this.navigateTo(7);
    }

    componentWillUnmount() {

        // SomeEvent.unsubscribe(this.myFunction);
    }

    render() {

        return(
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.h1}>Title</Text>
                <View style={styles.figure}>
                    <View style={styles.credits}>
                        <Text style={styles.labelCredits}>Photo: </Text>
                        <Text>
                            {JSON.stringify(this.props.data)}
                        </Text>
                    </View>
                </View>
                <Text style={styles.p}>aaaa aaa aaaaa</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 15
    },
    h1: {
        fontSize: 22,
        marginBottom: 20
    },
    p: {
        fontSize: 16,
        lineHeight: 24
    },
    figure: {
        marginBottom: 20,
    },
    img: {
        width: 300,
        height: 300,
        marginRight: 10,
        marginBottom: 10,
        backgroundColor: '#000'
    },
    credits: {
        flexDirection: 'row'
    },
    labelCredits: {
        fontSize: 18
    },
    linkCredits: {
        fontStyle: 'italic',
        color: '#2962FF'
    }
});
