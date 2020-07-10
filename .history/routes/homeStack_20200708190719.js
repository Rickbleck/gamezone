import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails'
import React from 'react'
import Header from '../shared/header'

const screens = {
    Home:{
        screen:Home,
        navigationOptions:()=>
{}    },
    ReviewDetails:{
        screen:ReviewDetails
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle:{backgroundColor: 'skyblue',}
    }
});

 
export default HomeStack