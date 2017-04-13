'use strict';

import React, {Component} from 'react';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    Button,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import ConfigApp from '../../configs/app.js';

export default class SearchView extends Component {

    constructor(props){

        super(props);

        this.state = {
            searchText: '',
            placeholder: 'Search',
            searchData: []
        };

        this.setSearchText = this.setSearchText.bind(this);
    }

    setSearchText(event) {

        let searchText = event.nativeEvent.text;
        this.setState({searchText});

        this.props.searchItems(searchText);
    }

    render() {

        return (
            <View>
                <TextInput
                    style={styles.searchBar}
                    value={this.state.searchText}
                    onChange={this.setSearchText.bind(this)}
                    placeholder={this.state.placeholder} />
            </View>
        );
    }
}

const styles = StyleSheet.create(Object.assign(ConfigApp.baseStyle, {
    searchBar: {
        padding: 5,
        paddingLeft: 20,
        marginBottom: 10,
        fontSize: 20,
        flex: .1,
        borderWidth: 3,
        borderColor: '#E4E4E4'
    }
}));