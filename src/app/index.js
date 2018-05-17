import React, { Component } from 'react';
import {
    TouchableOpacity,
    Dimensions,
    Text,
    Image,
    View,
    StatusBar,
} from 'react-native';

import { StackNavigator,DrawerNavigator,DrawerItems} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import HomePage from './../home/main';
import NearBy from './../nearby/index';
import Mine from './../mine/index';
import {RTabBarItem} from 'r-design';

const DrawerRouteConfigs = {
    HomePage: {
        screen: HomePage,
        navigationOptions: () => ({
            drawerLabel: '首页',
            drawerIcon: ({focused}) => {
                return (
                    <RTabBarItem
                        focused={focused}
                        normalImage={require('./../home/img/tabbar_btn_main_nor.png')}
                        selectedImage={require('./../home/img/tabbar_btn_main_foc.png')}
                    />
                );},
        }),
    },
    NearBy: {
        screen: NearBy,
        navigationOptions: () => ({
            drawerLabel: '附近',
            drawerIcon: ({focused}) => {
                return (
                    <RTabBarItem
                        focused={focused}
                        normalImage={require('./../home/img/tabbar_btn_video_nor.png')}
                        selectedImage={require('./../home/img/tabbar_btn_video_foc.png')}
                    />
                );},
        }),
    },
    Mine: {
        screen: Mine,
        navigationOptions: () => ({
            drawerLabel: '我的',
            drawerIcon: ({focused}) => {
                return (
                    <RTabBarItem
                        focused={focused}
                        normalImage={require('./../home/img/tabbar_btn_mine_nor.png')}
                        selectedImage={require('./../home/img/tabbar_btn_mine_foc.png')}
                    />
                );},
        }),
    },
};
const drawerWidth=Dimensions.get('window').width*0.7;

const navigationView =(props)=> {
    return (
        <View style={{flex: 1, flexDirection:'column',backgroundColor: '#fff'}}>
            <View style={{height:200,flexDirection:'column',backgroundColor: '#00bfff', 
                justifyContent: 'center', alignItems: 'center',marginBottom:20}}>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>{props.navigation.navigate('DrawerClose');
                    props.navigation.navigate('Family');}}>
                    <Image
                        source={require('./img/mine_pic.png')}
                    />
                </TouchableOpacity>
                <Text style={{color:'white',marginTop:8}}>
              GankLun
                </Text>
            </View>
            <DrawerItems {...props} />
        </View>

    );};

const DrawerNavigatorConfig={
    drawerWidth:drawerWidth,
    drawerPosition:'left',
    contentComponent: props => {
        return navigationView(props);
    },
    contentOptions: {
        initialRouteName: 'HomePage', // 默认页面组件
        activeItemKey : 'HomePage',
        activeTintColor: '#00bfff',  // 选中文字颜色
        activeBackgroundColor: '#dcdcdc', // 选中背景颜色
        inactiveTintColor: '#696969',  // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        labelStyle:{fontFamily:'Times'}
    },

};

const DrawNavigator = DrawerNavigator(DrawerRouteConfigs, DrawerNavigatorConfig);

const RouteConfigs = {
    Main:{
        screen:DrawNavigator,
        navigationOptions: () => ({
            header:null,
        }),
    },
    Family: {
        screen: NearBy,  
        navigationOptions: () => ({
            header:null,
        }),
    },
};

const StackNavigatorConfig = {
    initialRouteName: 'Main',
    mode: 'card',
    headerMode: 'screen',
    cardStyle: {backgroundColor: '#F5FCFF'},
    transitionConfig: (() => ({
        screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    })),

};

const Navigator = StackNavigator(RouteConfigs, StackNavigatorConfig);

export default class App extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    animated={true}
                    backgroundColor="#87ceeb"
                    barStyle="light-content"
                />
                <Navigator/>
            </View>
           
        );
    }
}
