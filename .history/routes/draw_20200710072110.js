import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation'
import AboutStack from './aboutStack'
import HomeStack from './homeStack'


const RootDraw=createDrawerNavigator({
    style={sty}
    Home:{
        screen: HomeStack
    },
    About:{
        screen: AboutStack
    }
});
export default createAppContainer(RootDraw);