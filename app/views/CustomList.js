'use strict';

import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet, ListView, Button} from 'react-native';

import Api from '../components/Api.js';

export default class CustomList extends Component {

    constructor(props){

        super(props);
        this.state = {
            query: null,
            hasResult: false,
            noResult: false, 
            result: null,
            isLoading: false,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        };
    }

    componentTestSearch(query){

        alert('search');

        // var query = _.capitalize(this.state.query);

        // this.setState({
        //     isLoading: true
        // });

        // api(query).then(

        //     (data) => {

        //         var speech = 'query was not found. Please type the exact query.';

        //         if(data.doc){

        //             var types = this.state.dataSource.cloneWithRows(data.doc.types);

        //             this.setState({
        //                 hasResult: true,
        //                 noResult: false,
        //                 result: data.doc,
        //                 types: types,
        //                 isLoading: false
        //             });

        //             var type_names = _.map(data.doc.types, function(type){

        //             return type.name;
        //         });


        //         speech = data.doc.name + ". A " + type_names.join(' and ') + ' query. ' + data.doc.description;


        //         }else{

        //             this.setState({
        //                 hasResult: false,
        //                 noResult: true,
        //                 isLoading: false,
        //                 result: null
        //             });
        //         }

        //         tts.speak({
        //             text: speech,
        //             forceStop : true , 
        //             language : 'en' 
        //         });

        //     }
        // );

    }

    // onPressSendRequest(){

    //     // alert('Button has been pressed!');
    //     this.search();
    // }

    onPressSendRequest(){

        alert(typeof componentTestSearch);

        // alert('Button has been pressed!');
        // this.componentTestSearch('test');
    }

    render(){

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
                    onPress={this.onPressSendRequest}
                    title="Send request"
                    color="#841584"
                />
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
  }
});

