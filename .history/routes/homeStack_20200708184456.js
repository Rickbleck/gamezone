import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails'
import re

const screens = {
    Home:{
        screen:Home,
        navigationOptions:{
            headerTitle:
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