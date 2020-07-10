import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation'
import AboutStack from './aboutStack'
import HomeStack from './homeStack'

<ImageBackground source={require('../assets/bg4.jpg')} style={styles.header}>
const RootDraw=createDrawerNavigator({
    Home:{
        screen: HomeStack
    },
    About:{
        screen: AboutStack
    }
});
</ImageBackground>
export default createAppContainer(RootDraw);