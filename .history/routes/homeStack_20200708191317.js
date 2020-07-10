import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails'
import React from 'react'
import Header from '../shared/header'

const screens = {
    Home:{
        screen:Home,
        navigationOptions:()=>{// here instead of returning only screens we are using a function which returns an object instead of being an object directly to be able to use it in another component
            return {//    navigationOptions:{headerTitle:()=> <Header/> an object like this one}
                screen:Home,
                navigationOptions:{
                    headerTitle:()=> <Header/>
                }
            },
                headerTitle:()=> <Header/>
            }
        }
    },
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