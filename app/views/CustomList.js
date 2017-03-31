'use strict';

import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet, ListView, Button} from 'react-native';

import Api from '../components/Api.js';
import _ from 'lodash';
import Tts from 'react-native-android-speech';
import GiftedSpinner from 'react-native-gifted-spinner';

export default class CustomList extends Component {

    constructor(props){

        super(props);

        this.state = {
            isLoading: false
        };
    }

    componentTestSearch(query){

        query = _.capitalize(query);

        this.setState({
            isLoading: true
        });

        Api(query).then(

            (data) => {

                alert(data.name);

                this.setState({
                    isLoading: false
                });

                Tts.speak({
                    text: speech,
                    forceStop: true, 
                    language: 'en' 
                });

            }
        );

    }

    

    onPressSendRequest() {

        this.componentTestSearch('aaaa');
    }

    componentDidMount() {

        // SomeEvent.subscribe(this.myFunction);
    }

    componentWillUnmount() {

        // SomeEvent.unsubscribe(this.myFunction);
    }

    render() {

        return (
            <ScrollView contentContainerStyle={styles.view}>
                <Text style={styles.h1}>Custom List</Text>
                
                <Text style={[styles.text, styles.p]}>
                    This template uses images
                    from <Text onPress={() =>
                        Linking.openURL('https://github.com/oblador/react-native-vector-icons')}
                        style={styles.linkCredits}
                    >
                        Mental Floss 
                    </Text> web site.
                </Text>

                <Button
                    onPress={this.onPressSendRequest.bind(this)}
                    title="Send request"
                    color="#841584"
                />

                {
                    this.state.isLoading &&
                    <View style={styles.loader}>
                        <GiftedSpinner />
                    </View>
                }

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: 20,
    marginBottom: 20,
    padding: 20
  },
  h1: {
    fontSize: 22,
    alignSelf: 'center',
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10
  },
  p: {
    textAlign: 'left',
    marginBottom: 20
  },
  linkCredits: {
    fontStyle: 'italic',
    color: '#2962FF'
  },
  loader: {
    flex: 1,
    alignItems: 'center'
  },
});

