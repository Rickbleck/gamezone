import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails'

const screens = {
    Home:{
        screen:Home,
        navigationOptions:{headerStyle:{backgroundColor: 'skyblue'}}
    },
    ReviewDetails:{
        screen:ReviewDetails
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions
});

 
export default createAppContainer(HomeStack)