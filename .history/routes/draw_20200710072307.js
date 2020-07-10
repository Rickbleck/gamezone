import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation'
import AboutStack from './aboutStack'
import HomeStack from './homeStack'
import { color } from 'react-native-reanimated';


const RootDraw=createDrawerNavigator(styleMedia=color {
    
    Home:{
        screen: HomeStack
    },
    About:{
        screen: AboutStack
    }
});
export default createAppContainer(RootDraw);