/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {RTabBarItem} from 'r-design';
import { TabNavigator,TabBarBottom } from 'react-navigation';

import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';

const TabRouteConfigs = {
    Home: {
        screen: Tab1,
        navigationOptions: () => ({
            tabBarLabel: '首页',
            tabBarIcon: ({focused}) => {
                return (
                    <RTabBarItem
                        focused={focused}
                        normalImage={require('./img/tabbar_btn_main_nor.png')}
                        selectedImage={require('./img/tabbar_btn_main_foc.png')}
                    />
                );},
        }),
    },
    NearBy: {
        screen: Tab2,
        navigationOptions: {
            tabBarLabel: '附近',
            tabBarIcon: ({focused}) => {
                return (
                    <RTabBarItem
                        focused={focused}
                        normalImage={require('./img/tabbar_btn_video_nor.png')}
                        selectedImage={require('./img/tabbar_btn_video_foc.png')}
                        badgeVisible={true}
                        badgeStyle={{position:'absolute',left:18,top:2,zIndex:100 }}
                        badgeText={666}
                    />
                );},
        },
    }
    ,
    Mine: {
        screen: Tab3,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({focused}) => {
                return (
                    <RTabBarItem
                        focused={focused}
                        normalImage={require('./img/tabbar_btn_mine_nor.png')}
                        selectedImage={require('./img/tabbar_btn_mine_foc.png')}
                    />
                );},
        },
    }
};
const TabNavigatorConfigs = {
    initialRouteName: 'Home',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled:true, 
    animationEnabled:true, 
    lazy: true,
    tabBarOptions: {
        activeTintColor :'#00bfff',
        inactiveTintColor :'black',
        labelStyle:{fontFamily:'sans-serif',fontSize:14,fontWeight:'bold'},
        indicatorStyle:{backgroundColor:'#00bfff'},
        style:{backgroundColor:'#ffffff',}
    }
};
const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);


export default class HomePage extends Component {
    render() {
        return (
            <Tab>
            </Tab>
            
        );
    }
}


