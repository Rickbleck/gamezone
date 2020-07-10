import {createStackNavigator} from 'react-navigation-stack';
import About from '../screens/about'
import React from 'react'
import Header from '../shared/header'


const screens = {
    About:{
        screen:About,
        navigationOptions:({ navigation })=>{// here instead of returning only screens we are using a function which returns an object instead of being an object directly to be able to use it in another component
            return {//    navigationOptions:{headerTitle:()=> <Header/> an object like this one}
                headerTitle:()=> <Header navigation={navigation} title='About' /> //object we are returning
            }
        }
    },
 
}

const aboutStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle:{backgroundColor: 'skyblue',}
    }
});

 
export default aboutStack