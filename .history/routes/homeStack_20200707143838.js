import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home'

const screens = {
    Home:{
        screen:Home
    },
    ReviewDetails:{
        screen:Revie
    }
}

const HomeStack = createStackNavigator(screens)