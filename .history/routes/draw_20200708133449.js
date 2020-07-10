import {createDrawNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation'
import AboutStack from './aboutStack'
import HomeStack from './homeStack'

const RootDrawe=createDrawNavigator({
    Home:{
        screen: HomeStack
    }
})