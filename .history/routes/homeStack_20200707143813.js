import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home'

const screens = {
    Home:{
        screen:Home
    },
    Rev
}

const HomeStack = createStackNavigator(screens)