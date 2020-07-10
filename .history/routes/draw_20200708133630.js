import {createDrawNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation'
import AboutStack from './aboutStack'
import HomeStack from './homeStack'
import aboutStack from './aboutStack';

const RootDraw=createDrawNavigator({
    Home:{
        screen: HomeStack
    },
    About:{
        screen: AboutStack
    }
});
export default createAppContainer(RootDraw);