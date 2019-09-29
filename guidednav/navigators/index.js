import {
    createAppContainer,

} from 'react-navigation';
import {
    createStackNavigator
} from 'react-navigation-stack';
import {
    createDrawerNavigator
} from 'react-navigation-drawer';
import HomeManage from '../components/HomeManage';
import EnterZip from '../components/EnterZip';
import RouteNames from './RouteNames';
import Help from '../components/Help';
import SelectNumber from '../components/SelectNumber';

const HomeStack = createStackNavigator({
    [RouteNames.HomeStack.home]: {
        screen: HomeManage
    },
    [RouteNames.HomeStack.enterZip]: {
        screen: EnterZip
    },
    [RouteNames.HomeStack.help]:{
        screen: Help
    },
    [RouteNames.HomeStack.selectNumber]:{
        screen:SelectNumber
    }
}, {
    initialRouteName: RouteNames.HomeStack.home,
    headerMode: 'float',
    defaultNavigationOptions: {
        headerTitleStyle: [
          {
          textAlign:"center", 
          flex:0.8,
          fontWeight:'bold'
        }]
      },
    headerStyle: {
        backgroundColor: 'black'
    },
    headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    headerTintColor: 'white'
});

const MainMenu = createDrawerNavigator({
    [RouteNames.Drawer.menu1]: {
        screen: HomeStack
    },
    [RouteNames.Drawer.menu2]: {
        screen: HomeStack
    }
}, {
    initialRouteName: RouteNames.Drawer.menu1,
    drawerPosition:'left',
    drawerType:'slide',
    drawerWidth:250,
    contentOptions: {
        activeTintColor: 'red',
        itemsContainerStyle: {
          marginVertical: 0,
        },
        iconContainerStyle: {
          opacity: 1
        }
      },
    navigationOptions:{
        gesturesEnabled:false
    }
});

const AppContainer = createAppContainer(MainMenu);

export default AppContainer;
