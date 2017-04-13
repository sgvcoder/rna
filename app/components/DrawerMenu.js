'use strict';

import React, {
    Component, 
    PropTypes
} from 'react';
import {
    View, 
    ScrollView, 
    Text, 
    Image, 
    Dimensions, 
    TouchableOpacity, 
    StyleSheet,
    AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';
import Tts from 'react-native-android-speech';
import GiftedSpinner from 'react-native-gifted-spinner';

import ConfigApp from '../configs/app.js';
import Api from '../components/Api.js';
import {getLikedItems, addLikedItem, deleteLikedItem} from '../components/LocalStorage.js';

class DrawerMenu extends Component {

    constructor(props) {

        super(props);

        this.state = {
            route: 0,
            options: {items:[]},
            isLoading: false
        };

        this.navigateTo = this.navigateTo.bind(this);
    }

    navigateTo(index) {

        this.props.navigate(12, {itemId: index}, 'item_details');
    }

    componentDidMount() {

        // getLikedItems();
        // addLikedItem();
        // deleteLikedItem(6);

        let key = 'requestDrawerMenu' + ConfigApp.version;
        
        AsyncStorage.getItem(key).then((value) => {
            
            if(value !== null){

                this.setState({
                    options: JSON.parse(value)
                });

            } else {

                var query = _.capitalize('items');

                this.setState({
                    isLoading: true
                });

                Api('apiDrawerMenu', query).then(

                    (data) => {

                        this.setState({
                            isLoading: false,
                            options: data
                        });

                        AsyncStorage.setItem(key, JSON.stringify(data));
                    }
                );
            }
        });
    }

    componentWillUnmount() {

    }

    render() {

        return(
            <ScrollView style={styles.drawer}>
                <View style={styles.header} key={0}>
                    <View style={styles.headerIcon} key={0}>
                        <Icon name="md-wine" size={50} color="#fff" />
                    </View>
                    <View style={styles.headerInfo} key={1}>
                        <Text style={styles.headerTitle} key={0}>{this.state.options.headerTitle}</Text>
                        <Text style={styles.headerEmail} key={1}>{this.state.options.headerEmail}</Text>
                    </View>
                </View>

                {
                    this.state.isLoading &&
                    <View style={styles.loader}>
                        <GiftedSpinner />
                    </View>
                }

                <View style={styles.content} key={1}>
                    <View>
                        {this.state.options.items.map((item, idx) => (
                            <TouchableOpacity
                                key={idx}
                                style={styles.listItem}
                                onPress={this.navigateTo.bind(this, item.index)} >

                                <Image source={{ uri: item.thumb}} style={styles.listItemImage} />
                                <Text style={styles.listItemTitle}>{item.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

            </ScrollView>
        );
    }
}

DrawerMenu.propTypes = {
    navigate: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    drawer: {
        flex: 1,
        backgroundColor: '#353535'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1,
        padding: 16,
        backgroundColor: '#353535'
    },
    content: {
        flex: 3,
        padding: 16,
        backgroundColor: '#737373'
    },
    headerInfo: {
        paddingTop: 7,
        paddingLeft: 10
    },
    headerIcon: {
        width: 70,
        height: 70,
        borderRadius: 45,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000'
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20
    },
    headerEmail: {
        color: '#fff',
        fontSize: 16
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 80,
        marginBottom: 10
    },
    listItemTitle: {
        fontSize: 18,
        flexShrink: 1,
        color: '#fff'
    },
    listItemImage: {
        width: 80,
        height: 80,
        borderRadius: 7,
        marginRight: 10,
    }
});

export default DrawerMenu;
