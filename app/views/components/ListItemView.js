import React, {Component} from 'react';
import {
    ScrollView,
    View,
    Text,
    Button,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class ListItemView extends Component {

    constructor(props){

        super(props);
    }

    render() {

        return (
            <View >
                <TouchableOpacity 
                    onPress={this.props.onPress}
                    key={this.key} 
                    style={styles.listItem} >

                    <Image source={{uri: this.props.data.image}} style={styles.listItemImage} />

                    <View style={styles.listIteminfo}>
                        <Text style={styles.listItemTitle}>{this.props.data.name}</Text>
                        <Text style={styles.listItemDescription}>{this.props.data.description}</Text>
                        <Text style={styles.listItemAddress}>{this.props.data.address}</Text>
                    </View>

                </TouchableOpacity>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        justifyContent: 'flex-start',        
        marginTop: 10,
        padding: 20
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 80,
        marginBottom: 10
    },
    listIteminfo: {
        flex: 1, 
        flexDirection: 'column'
    },
    listItemTitle: {
        fontSize: 18,
        flexShrink: 1,
        fontWeight: 'bold',
        color: '#353535'
    },
    listItemDescription: {
        fontSize: 16,
        color: '#353535'
    },
    listItemAddress: {
        fontStyle: 'italic'
    },
    listItemImage: {
        width: 80,
        height: 80,
        borderRadius: 7,
        marginRight: 10,
    }
});