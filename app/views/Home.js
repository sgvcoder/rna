'use strict';

import React, {Component} from 'react';
import {
    ScrollView,
    View,
    Text,
    Button,
    Image,
    StyleSheet
} from 'react-native';
import _ from 'lodash';
import GiftedSpinner from 'react-native-gifted-spinner';

import ConfigApp from '../configs/app.js';
import Api from '../components/Api.js';
import ListItemView from '../views/components/ListItemView';
import SearchView from '../views/components/SearchView';
import FooterView from '../views/components/FooterView';

export default class Home extends Component {

    constructor(props){

        super(props);

        this.state = {
            isLoading: false,
            options: {
                items: []
            }
        };

        this.navigateTo = this.navigateTo.bind(this);
        this.searchItems = this.searchItems.bind(this);
    }

    navigateTo(index, id) {

        this.props.navigate(index, id, 'article_view');
    }

    searchItems(searchText){

        let query = _.capitalize(searchText);

        this.setState({
            isLoading: true
        });

        Api('apiSearchItemsList', 'name=' + query).then(

            (data) => {

                this.setState({
                    isLoading: false,
                    options: data
                });
            }
        );
    }

    componentDidMount(){

        let query = _.capitalize('home');

        this.setState({
            isLoading: true
        });

        Api('apiItemsList', query).then(

            (data) => {

                this.setState({
                    isLoading: false,
                    options: data
                });
            }
        );
    }

    componentWillUnmount() {

    }

    render() {

        return (
            <ScrollView contentContainerStyle={styles.view, styles.viewPadding}>

                <SearchView searchItems={this.searchItems}/>

                <Text style={styles.header}>Result</Text>
                <Text style={styles.description}>
                    Know the most beautiful lighthouses of the world.
                </Text>

                {
                    this.state.isLoading &&
                    <View style={styles.loader}>
                        <GiftedSpinner />
                    </View>
                }                

                <View style={styles.articleListContainer}>
                    {this.state.options.items.map((item, idx) => (
                        <ListItemView
                            key={idx}
                            data={item}
                            onPress={()=>this.navigateTo(10, item.id)} >

                            12312312
                        </ListItemView>
                    ))}
                </View>

                <Text style={[styles.p, styles.b]}>
                    This template uses images
                    from <Text 
                        onPress={() => Linking.openURL('https://github.com/oblador/react-native-vector-icons')}
                        style={styles.a} >

                        Mental Floss 
                    </Text> web site.
                </Text>

                <FooterView />

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create(Object.assign(ConfigApp.baseStyle, {
    header: {
        fontSize: 24,
        alignItems: 'center'
    },
    description: {
        fontSize: 18,
        lineHeight: 24,
        marginBottom: 10
    }
}));