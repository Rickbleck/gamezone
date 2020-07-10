import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation'
import AboutStack from './aboutStack'
import HomeStack from './homeStack'


const RootDraw=createDrawerNavigator({
    <ImageBackground source={require('../assets/bg4.jpg')} style={styles.header}>
    Home:{
        screen: HomeStack
    },
    About:{
        screen: AboutStack
    }
    </ImageBackground>
});
export default createAppContainer(RootDraw);