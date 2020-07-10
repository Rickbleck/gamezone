import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails'
import React from 'react'
import Header from '../shared/header'

const screens = {
    Home:{
        screen:Home,
        navigationOptions:({ navigation })=>{// here instead of returning only screens we are using a function which returns an object instead of being an object directly to be able to use it in another component
            return {//    navigationOptions:{headerTitle:()=> <Header/> an object like this one}
                headerTitle:()=> <Header navigation={navigation} title='Gamezone' /> //object we are returning
            }
        }
    },
    ReviewDetails:{
        screen:ReviewDetails,
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle:{backgroundColor: 'white',}
    }
});

 
export default HomeStack