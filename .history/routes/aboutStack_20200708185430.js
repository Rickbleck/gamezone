import {createStackNavigator} from 'react-navigation-stack';
import About from '../screens/about'
import React from 'react'
import Header from '../shared/header'


const screens = {
    About:{
        screen:About,
    },
 
}

const aboutStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle:{backgroundColor: 'skyblue',}
    }
});

 
export default aboutStack