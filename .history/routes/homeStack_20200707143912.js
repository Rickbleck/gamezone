import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/'

const screens = {
    Home:{
        screen:Home
    },
    ReviewDetails:{
        screen:ReviewDetails
    }
}

const HomeStack = createStackNavigator(screens)