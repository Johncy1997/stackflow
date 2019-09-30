import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    Platform,
    FlatList,
    TouchableOpacity,
    Dimensions,
    Animated
} from 'react-native';
import RouteNames from '../navigators/RouteNames';

const isAndroid = Platform.OS == "android" ? true : false;
const WindowWidth = Dimensions.get('screen').width;
const OnePart = (WindowWidth / 100);
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [
                {
                    text: "Button1",
                    color: 'red'
                },
                {
                    text: "Button2 Himh",
                    color: "green"
                },
                {
                    text: "Button3 hd",
                    color: "blue",
                },
                {
                    text: "Button4",
                    color: "yellow"
                },
                {
                    text: "Button5jhdfjfhs",
                    color: "violet"
                },
                {
                    text: "Button6",
                    color: "grey"
                },
                {
                    text: "Button7 hihd",
                    color: "#ff7b00"
                },
                {
                    text: "Button8",
                    color: "#4cff00"
                },
                {
                    text: "Button9 hfdsjhkj",
                    color: "#d400ff"
                }
            ],
            activeIndex: 1
        };
        this.scaleHalf = new Animated.Value(1)
        this.scaleFull = new Animated.Value(1.1)
    }

    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('dark-content');
            isAndroid && StatusBar.setBackgroundColor('red');
        });
    }

    componentWillUnmount() {
        this._navListener.remove();
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    backgroundColor: 'red', margin: 10, padding: 10, borderRadius: 30, shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 10,
                    },
                    shadowOpacity: 0.51,
                    shadowRadius: 13.16,

                    elevation: 20,
                }}>
                    <Text onPress={() => this.props.navigation.navigate(RouteNames.HomeStack.HomeSecond)}>Go to HomeSecond</Text>
                </View>
                <View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ height: 50, }}
                        data={this.state.options}
                        horizontal={true}
                        ref={(ref) => { this.flatListRef = ref; }}
                        keyExtractor={(item, index) => `${item.text}`}
                        renderItem={({ item, index }) => {
                            return (<View  style={[, this.state.activeIndex === index ? {
                                shadowColor: '#000',
                                shadowOffset: { width: 22, height: 12 },
                                shadowOpacity: 0.9,
                                shadowRadius: 10,
                                elevation: 100,
                                borderColor:'white',
                                borderWidth:3,
                                backgroundColor:item.color,
                            } : {elevation:1}]}>
                                <TouchableOpacity
                                    onPress={() => {
                                        if (index === 0) {
                                            this.setState({
                                                options: [...[this.state.options[1], this.state.options[0]], ...this.state.options.filter((item, index) => !new RegExp(/^(0|1)$/).test(index))],
                                                activeIndex: 1
                                            });
                                        } else if (index === this.state.options.length - 1) {
                                            this.setState({
                                                options: [...this.state.options.filter((item, index) => !(index == this.state.options.length - 1 || index === this.state.options.length - 2)), ...[this.state.options[this.state.options.length - 1], this.state.options[this.state.options.length - 2]]],
                                                activeIndex: this.state.options.length - 2
                                            });
                                        }
                                        else {
                                            this.setState({ activeIndex: index });
                                        }
                                        this.flatListRef.scrollToIndex({ animated: true, index: index == 0 ? index : index - 1 });
                                    }}
                                    style={[{
                                        padding: 10,
                                        backgroundColor: item.color,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '100%',
                                        elevation: this.state.activeIndex == index ? 20 : 0,
                                    }]}>
                                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>{item.text}</Text>
                                </TouchableOpacity>
                            </View>)
                        }}
                    />
                </View>

                <View
                    style={{ height: 5, backgroundColor: this.state.options[this.state.activeIndex].color }}
                />
            </View>
        )
    }
}