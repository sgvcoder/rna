'use strict';

import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet, ListView, Button} from 'react-native';
import _ from 'lodash';
import Tts from 'react-native-android-speech';
import GiftedSpinner from 'react-native-gifted-spinner';

import Api from '../components/Api.js';

import ArticlePreview from './ArticlePreview.js';

export default class CustomList extends Component {

    constructor(props){

        super(props);

        this.state = {
            isLoading: false,
            articlesList: []
        };

        this.navigateTo = this.navigateTo.bind(this);
    }

    componentTestSearch(query){

        query = _.capitalize(query);

        this.setState({
            isLoading: true
        });

        Api('articlesList', query).then(

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

    navigateTo(index, id) {

        this.props.navigate(index, id, 'article_view');
    }

    onPressSendRequest() {

        this.componentTestSearch('aaaa');
    }

    componentDidMount() {

        this.setState({
            isLoading: true
        });

        Api('articlesList', null).then(

            (data) => {

                this.setState({
                    isLoading: false,
                    articlesList: data
                });

            }
        );
    }

    componentWillUnmount() {

        // SomeEvent.unsubscribe(this.myFunction);
    }

    render() {

        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.h1}>List</Text>

                {
                    this.state.isLoading &&
                    <View style={styles.loader}>
                        <GiftedSpinner />
                    </View>
                }

                {this._renderArticleList()}

                <Text style={[styles.text, styles.p]}>
                    This template uses images
                    from <Text onPress={() =>
                        Linking.openURL('https://github.com/oblador/react-native-vector-icons')}
                        style={styles.linkCredits} >

                        Mental Floss 
                    </Text> web site.
                </Text>

                <Button
                    onPress={this.onPressSendRequest.bind(this)}
                    title="Send request"
                    color="#841584" />

                {this._renderFooter()}

            </ScrollView>
        );
    }

    _renderArticleList() {

        return (
            <View style={styles.articleListContainer}>
                {this.state.articlesList.map((item, idx) => (
                    <ArticlePreview
                        key={idx}
                        index={item.index}
                        id={item.element_id}
                        category={item.category}
                        title={item.name}
                        onPress={()=>this.navigateTo(10, item.id)} >
                        
                        {item.description}, {item.address}
                    </ArticlePreview>
                ))}
            </View>
        );
    }

    _renderFooter() {

        return (
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>
                    That’s all for now! This is a brand new project
                    and more articles will be coming soon. If
                    you would like to be notified by e-mail of
                    updates, sign up for the....
                </Text>
            </View>
        )
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
  footerContainer: {
    marginTop: 25,
    paddingHorizontal: 30,
    marginBottom: 60,
  },
  footerText: {
    color: '#595959',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
  },
  articleListContainer: {
    backgroundColor: '#fff',
  }
});

