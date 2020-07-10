import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/home';
import About from '../screens/about'

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