import {createStackNavigator} from 'react-navigation-stack';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails'

const screens = {
    Home:{
        screen:Home,
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

 
export default createAppContainer(HomeStack)