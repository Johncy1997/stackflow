import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    StatusBar,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import {
    NavigationActions
} from 'react-navigation'
import RouteNames from './RouteNames';

const WindowWidth = Dimensions.get('screen').width;
const OnePart = (WindowWidth / 100);

export default class CustomTab extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.defaultStateForAction = this.props.navigation.router.getStateForAction;
        this.props.navigation.router.getStateForAction = (action, state) => {
            console.log(action, state);
            if (action.type === "Navigation/INIT" || action.type === "Navigation/NAVIGATE") {

            }
            return this.defaultStateForAction(action, state);
        }
    }

    navigateToStack(stackName, routeName, params) {
        const navigate = NavigationActions.navigate({
            routeName: stackName,
            params: params,
            action: NavigationActions.navigate({
                routeName: routeName,
                params: params
            })
        });
        this.props.navigation.dispatch(navigate);
    }

    render() {
        const { index } = this.props.navigation.state;
        return (
            <SafeAreaView style={{ backgroundColor: "#c1de1f", width: '100%',borderBottomWidth:0.5,borderBottomColor:'grey' }}>
                <StatusBar backgroundColor="#c1de1f" barStyle='dark-content' />
                <View style={{
                    justifyContent: 'center', 
                    backgroundColor: "#c1de1f",
                    overflow: 'visible',
                }}>
                    <TouchableOpacity style={{ height: OnePart * 20, width: OnePart * 20, borderRadius: OnePart * 10, position: 'absolute', left: OnePart * 10, top: OnePart * 3, zIndex: 100 }}>
                        <View style={{ height: '100%', width: '100%' }}>
                            <Image source={require('../assets/profile.png')} style={{ height: '100%', width: '100%', borderRadius: OnePart * 10, resizeMode: 'cover' }} />
                            <Image source={require('../assets/star.png')} style={{ height: OnePart * 5, width: OnePart * 5, resizeMode: 'contain', position: 'absolute', bottom: 0, right: 0 }} />
                        </View>
                    </TouchableOpacity>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: OnePart * 2,
                        paddingRight: OnePart * 2,
                    }}>
                        <TouchableOpacity disabled={this.props.hideBack} onPress={() => this.props.navigation.goBack()} style={{ width: OnePart * 10, opacity: this.props.hideBack ? 0 : 1 }}>
                            <Image source={require('../assets/left.png')} style={{ width: OnePart * 7, height: 30, resizeMode: 'contain', tintColor: 'black' }} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', paddingLeft: OnePart * 20 }} >
                            <TouchableOpacity style={{ marginRight: OnePart * 5 }} onPress={() => this.navigateToStack(RouteNames.MainTab.Tab1, RouteNames.HomeStack.Home)}>
                                <Image source={require('../assets/menu.png')}
                                    style={{ width: OnePart * 7, height: 50, resizeMode: 'contain', tintColor: index === 0 ? 'white' : 'black' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginRight: OnePart * 5 }} onPress={() => this.navigateToStack(RouteNames.MainTab.Tab2, RouteNames.SecondStack.Second)}>
                                <Image
                                    source={require('../assets/menu.png')}
                                    style={{ width: OnePart * 7, height: 50, resizeMode: 'contain', tintColor: index === 1 ? 'white' : 'black' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginRight: OnePart * 5 }} onPress={() => this.navigateToStack(RouteNames.MainTab.Tab3, RouteNames.ThirdStack.Third)}>
                                <Image
                                    source={require('../assets/menu.png')}
                                    style={{ width: OnePart * 7, height: 50, resizeMode: 'contain', tintColor: index === 2 ? 'white' : 'black' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginRight: OnePart * 5 }} onPress={() => this.navigateToStack(RouteNames.MainTab.Tab4, RouteNames.FourthStack.Fourth)}>
                                <Image
                                    source={require('../assets/menu.png')}
                                    style={{ width: OnePart * 7, height: 50, resizeMode: 'contain', tintColor: index === 3 ? 'white' : 'black' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginRight: OnePart * 5 }} onPress={() => this.navigateToStack(RouteNames.MainTab.Tab5, RouteNames.FifthStack.Fifth)}>
                                <Image
                                    source={require('../assets/menu.png')}
                                    style={{ width: OnePart * 7, height: 50, resizeMode: 'contain', tintColor: index === 4 ? 'white' : 'black' }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.navigateToStack(RouteNames.MainTab.Tab6, RouteNames.SixthStack.Sixth)}>
                                <Image
                                    source={require('../assets/menu.png')}
                                    style={{ width: OnePart * 7, height: 50, resizeMode: 'contain', tintColor: index === 5 ? 'white' : 'black' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        paddingLeft: OnePart * 34,
                        zIndex: 50, justifyContent: 'space-between',
                        padding: OnePart * 2, alignItems: 'center'
                    }}>
                        <View>
                            <Text>Mr.Bean</Text>
                            <Text>Coffee Lover</Text>
                        </View>
                        <TouchableOpacity style={{ height: OnePart * 10, width: OnePart * 10, borderRadius: OnePart * 5, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../assets/menu.png')} style={{ width: OnePart * 10, height: OnePart * 10, resizeMode: 'cover', tintColor: 'black' }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )

    }
}