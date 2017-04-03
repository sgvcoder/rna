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
// import {menuItems} from '../data.service';

class DrawerMenu extends Component {

    constructor(props) {

        super(props);

        this.state = {
            route: 0,
            menuItems: []
        };
        this.navigateTo = this.navigateTo.bind(this);
    }

    navigateTo(index) {

        this.props.navigate(index);
    }

    componentDidMount() {

        let key = 'data_test_4';
        
        AsyncStorage.getItem(key).then((value) => {
            
            if(value !== null){

                this.setState({
                    menuItems: JSON.parse(value)
                });

            } else {                

                let data = [{
                        thumb: 'lighthouse_lindau',
                        index: 1,
                        label: 'Lindau Lighthouse, Germany',
                    },
                    {
                        thumb: 'lighthouse_fanad',
                        index: 2,
                        label: 'Fanad Lighthouse, Ireland'
                    }];

                this.setState({
                    menuItems: data
                });

                AsyncStorage.setItem(key, JSON.stringify(data));
            }
        });

        // SomeEvent.subscribe(this.myFunction);
    }

    componentWillUnmount() {

        // SomeEvent.unsubscribe(this.myFunction);
    }

    render() {

        return(
            <ScrollView style={styles.drawer}>
                <View style={styles.header} key={0}>
                    <View style={styles.headerIcon} key={0}>
                        <Icon name="md-wine" size={50} color="#fff" />
                    </View>
                    <View style={styles.headerInfo} key={1}>
                        <Text style={styles.headerTitle} key={0}>
                            sgvcoder
                        </Text>
                        <Text style={styles.headerEmail} key={1}>
                            sgvcoder@gmail.com
                        </Text>
                    </View>
                </View>
                <View style={styles.content} key={1}>
                    <View>
                        {this.state.menuItems.map((item, idx) => (
                            <TouchableOpacity
                                key={idx}
                                style={styles.listItem}
                                onPress={this.navigateTo.bind(this, item.index)}
                            >
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
    },
    header: {
        height: 180,
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
        height: 56
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
