import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/home';
import About from '../screens/aboutStack'

const screens = {
    About:{
        screen:about,
    },
 
}

const aboutStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle:{backgroundColor: 'skyblue',}
    }
});

 
export default aboutStack