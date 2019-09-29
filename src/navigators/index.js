import React from 'react';
import {
    createAppContainer
} from 'react-navigation';
import {
    createStackNavigator
} from 'react-navigation-stack';
import {
    createMaterialTopTabNavigator
} from 'react-navigation-tabs';
import RouteNames from './RouteNames';
import Home from '../components/Home';
import Second from '../components/Second';
import Third from '../components/Third';
import Fourth from '../components/Fourth';
import Fifth from '../components/Fifth';
import CustomTab from './CustomTab';
import HomeSecond from '../components/HomeSecond';
import Sixth from '../components/Sixth';

const HomeStack = createStackNavigator({
    [RouteNames.HomeStack.Home]:{
        screen: Home
    },
    [RouteNames.HomeStack.HomeSecond]:{
        screen: HomeSecond
    }
},{
    initialRouteName:RouteNames.HomeStack.Home,
    headerMode:'none'
});

const SecondStack = createStackNavigator({
    [RouteNames.SecondStack.Second]:{
        screen: Second
    }
},{
    initialRouteName:RouteNames.SecondStack.Second,
    headerMode:'none'
});

const ThirdStack = createStackNavigator({
    [RouteNames.ThirdStack.Third]:{
        screen: Third
    }
},{
    initialRouteName: RouteNames.ThirdStack.Third,
    headerMode:'none'
});

const FourthStack = createStackNavigator({
    [RouteNames.FourthStack.Fourth]:{
        screen: Fourth
    }
},{
    initialRouteName: RouteNames.FourthStack.Fourth,
    headerMode:'none'
});

const FifthStack = createStackNavigator({
    [RouteNames.FifthStack.Fifth]:{
        screen: Fifth
    }
},{
    initialRouteName: RouteNames.FifthStack.Fifth,
    headerMode:'none'
});

const SixthStack = createStackNavigator({
    [RouteNames.SixthStack.Sixth]:{
        screen: Sixth
    }
},{
    initialRouteName: RouteNames.SixthStack.Sixth,
    headerMode:'none'
});

const MainTab = createMaterialTopTabNavigator({
    [RouteNames.MainTab.Tab1]:{
        screen: HomeStack
    },
    [RouteNames.MainTab.Tab2]:{
        screen: SecondStack
    },
    [RouteNames.MainTab.Tab3]:{
        screen: ThirdStack
    },
    [RouteNames.MainTab.Tab4]:{
        screen: FourthStack
    },
    [RouteNames.MainTab.Tab5]:{
        screen: FifthStack
    },
    [RouteNames.MainTab.Tab6]:{
        screen: SixthStack
    }
},{
    initialRouteName: RouteNames.MainTab.Tab1,
    tabBarComponent: props => {

        return(<CustomTab {...props} hideBack={props.navigation.state.routes[props.navigation.state.index].index === 0?true:false}/>)}
});

const AppContainer = createAppContainer(MainTab);

export default AppContainer;
