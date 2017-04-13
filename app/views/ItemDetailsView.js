'use strict';

import React, {
    Component
} from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import GiftedSpinner from 'react-native-gifted-spinner';

import ConfigApp from '../configs/app.js';
import Api from '../components/Api.js';

export default class ItemDetailsView extends Component {

    constructor(props){

        super(props);

        this.state = {
        	isLoading: false,
        	options: {}
        };
    }

    onPressSendRequest() {

    }

    componentDidMount() {

    	let query = this.props.data.itemId;

        this.setState({
            isLoading: true
        });

        Api('apiGetItemDetails', 'itemId=' + query).then(

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

        return(
            <ScrollView contentContainerStyle={styles.view}>

            	{
                    this.state.isLoading &&
                    <View style={styles.loader}>
                        <GiftedSpinner />
                    </View>
                }  

                <View style={styles.center}>
                	<Image source={{uri: this.state.options.image}} style={styles.mainImage} />
            	</View>

            	<View style={styles.viewPadding}>
	                <Text style={styles.header}>{this.state.options.name}</Text>
	                <Text style={styles.description}>{this.state.options.description}</Text>

	                <Text style={styles.h1}>adasdas</Text>
                    <Text style={styles.labelCredits}>Photo: </Text>
                    <Text>{JSON.stringify(this.state.options)}</Text>
	                <Text style={styles.p}>aaaa aaa aaaaa</Text>
                </View>
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
    },
    h1: {
        fontSize: 22,
        marginBottom: 20
    },
	mainImage: {
		height: 100,
		flex: 1,
		alignSelf: 'stretch'
	}
}));
