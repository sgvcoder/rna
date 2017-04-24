'use strict';

import React, {Component, PropTypes} from 'react';
import {
    View, 
    Text, 
    DrawerLayoutAndroid, 
    Navigator, 
    ToolbarAndroid, 
    TouchableOpacity, 
    BackAndroid, 
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {routes, toolbarActions} from '../data.service';

import DrawerMenu from './DrawerMenu';

import ArticleView from '../views/ArticleView';
import ItemDetailsView from '../views/ItemDetailsView';
import AnimationsView from '../views/AnimationsView';
import SearchModal from '../views/modals/SearchModal';

import Home from '../views/Home';
import About from '../views/About';
import Credits from '../views/Credits';
import CustomList from '../views/CustomList';

class App extends Component {

    constructor(props) {

        super(props);

        this.state = {
            routes: [0],
            action: null,
            drawerClosed: true,
        }
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this._onActionSelected = this._onActionSelected.bind(this);
        this.navigateTo = this.navigateTo.bind(this);
        this.setDrawerState = this.setDrawerState.bind(this);
        this.handlesBackButton = this.handlesBackButton.bind(this);
    }

    _onActionSelected(position) {

        switch (position) {
            case 0:
                this.navigateTo(7);
                break;
            case 1:
                this.navigateTo(8);
                break;
            case 2:
                this.navigateTo(9);
                break;
            case 3:
                this.navigateTo(11, {}, 'search_modal');
                break;
            case 4:
                this.navigateTo(13, {}, '');
                break;
        }
    }

    toggleDrawer() {

        if (this.state.drawerClosed) {

            this.DRAWER.openDrawer();
        } else {

            this.DRAWER.closeDrawer();
        }
    }

    setDrawerState() {

        this.setState({
            drawerClosed: !this.state.drawerClosed
        });
    }

    navigateTo(rout_idx, passProps, action) {

        this.DRAWER.closeDrawer();
        let _routes = this.state.routes.slice();
        let hasRoute = false;

        if (rout_idx === 0) {

            this._navigator.resetTo(routes[0]);
            this.setState({
                routes: [0],
                action: action,
                passProps: passProps
            });
        } else {

            _routes.some((item, index) => {
                if (item === rout_idx) {

                    this._navigator.popN(_routes.length -1 - index);
                    _routes = this.state.routes.slice(0, index + 1);
                    hasRoute = true;
                }
            });


            if (this._navigator && this._navigator.getCurrentRoutes().length > 1) {

                var rout_list = this._navigator.getCurrentRoutes(),
                    isset = false;

                for (var i = 0; i < rout_list.length; i++) {

                    if(rout_list[i].index == rout_idx) {

                        isset = true;
                        break;
                    }
                } 
            }

            if(!isset) {

                this._navigator.push(routes[rout_idx]);
            }

            this.setState({
                routes: hasRoute === true ? _routes : [ ...this.state.routes, rout_idx],
                action: action,
                passProps: passProps
            });
        }
    }

    handlesBackButton() {
        
        if (this._navigator && this._navigator.getCurrentRoutes().length > 1) {
            try {

                this._navigator.pop();
                const _routes = this.state.routes.slice();
                _routes.pop();

                this.setState({
                    routes: _routes
                });
            } catch(e) {}

            return true;
        }

        return false;
    }

    componentWillMount(){

        BackAndroid.addEventListener('hardwareBackPress', this.handlesBackButton);
    }

    componentWillUnmount() {

        BackAndroid.removeEventListener('hardwareBackPress', this.handlesBackButton);
    }

    render() {

        return(
            <DrawerLayoutAndroid
                drawerWidth={300}
                ref={(drawerElement) => { this.DRAWER = drawerElement; }}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                onDrawerOpen={this.setDrawerState}
                onDrawerClose={this.setDrawerState}
                renderNavigationView={() => <DrawerMenu navigate={this.navigateTo} />} >

                <Icon.ToolbarAndroid
                    titleColor='#fff'
                    navIconName='md-menu'
                    onIconClicked={this.toggleDrawer}
                    actions={toolbarActions}
                    onActionSelected={this._onActionSelected}
                    style={styles.appBar}
                    overflowIconName="md-more" >
                    
                    <View style={styles.appBarLogo}>
                        <TouchableOpacity
                            onPress={this.navigateTo.bind(this, 0)} >

                            <Icon name="md-wine" size={30} color="#fff" />
                        </TouchableOpacity>
                        <Text
                            style={styles.appBarTitle}
                            numberOfLines={1} >

                            {routes[this.state.routes[this.state.routes.length - 1]].title}
                        </Text>
                    </View>
                </Icon.ToolbarAndroid>

                <Navigator
                    initialRoute={routes[0]}
                    renderScene={(route, navigator) => {

                        switch (route.index) {
                            case 0:
                                return <Home navigate={this.navigateTo} />;
                            case 7:
                                return <About />;
                            case 8:
                                return <Credits />;
                            case 9:
                                return <CustomList navigate={this.navigateTo} />;
                            case 10:
                                return <ArticleView navigate={this.navigateTo} data={this.state.passProps} />;
                            case 11:
                                return <SearchModal navigate={this.navigateTo} data={this.state.passProps} />;
                            case 12:
                                return <ItemDetailsView navigate={this.navigateTo} data={this.state.passProps} />;
                            case 13:
                                return <AnimationsView navigate={this.navigateTo} data={this.state.passProps} />;
                            default:
                                return <About />;
                        }
                    }}
                    configureScene={(route, routeStack) =>
                        Navigator.SceneConfigs.FloatFromRight
                    }
                    ref={(nav) => {this._navigator = nav;}}
                />

            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({
    appBar: {
        height: 56,
        backgroundColor: '#353535',
        elevation: 4
    },
    appBarLogo: {
        height: 56,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    appBarTitle: {
        fontSize: 20,
        color: '#fff',
        paddingLeft: 10
    }
});

export default App;
