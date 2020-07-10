import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/home';
import About from '../screens/reviewDetails'

const screens = {
    About:{
        screen:Home,
    },
 
}

const aboutStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle:{backgroundColor: 'skyblue',}
    }
});

 
export default aboutStack