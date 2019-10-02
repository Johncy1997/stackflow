import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
    StatusBar,
    ScrollView,
    TouchableWithoutFeedback,
    FlatList
} from 'react-native';
import Voice from 'react-native-voice';
import RouteNames from '../navigators/RouteNames';
import { showToaster, speakMessage } from '../utils/CommonFunctions';
import Permissions, { PERMISSIONS } from 'react-native-permissions';
import {
    copilot, walkthroughable,
    CopilotStep
} from 'react-native-copilot';
import Tts from 'react-native-tts';

const WalkthroughableTouchableOpacity = walkthroughable(TouchableOpacity);

const Options = [
    {
        name: "Edit device nickname",
        routeName: RouteNames.HomeStack.enterZip
    },
    {
        name: "Edit Share Name ID",
        routeName: RouteNames.HomeStack.enterZip
    },
    {
        name: "Advanced device details",
        routeName: RouteNames.HomeStack.enterZip
    },
    {
        name: "Phone-to-phone Transfer",
        routeName: RouteNames.HomeStack.enterZip
    },
    {
        name: "Back up to Cloud",
        routeName: RouteNames.HomeStack.enterZip
    },
    {
        name: "Change mobile number",
        routeName: RouteNames.HomeStack.enterZip
    }
]

const keywords = ["change mobile number", "i want to change mobile number", "edit Number", "change number","change my number"];

class HomeManage extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Dunking",
        headerLeft: <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ height: 20, width: 40, marginLeft: 10 }}>
            <Image source={require('../assets/images.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
        </TouchableOpacity>,
        headerRight: <TouchableOpacity onPress={() => navigation.navigate(RouteNames.HomeStack.help)} style={{ height: 20, width: 40, marginRight: 10 }}>
            <Image source={require('../assets/ques.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
        </TouchableOpacity>
    });

    constructor(props) {
        super(props);
        this.state = {
            speechInProgress: false,
            results: [],
            active: -1
        }
        Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
        Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
        Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
       
    }

    onSpeechStartHandler(e) {
        this.setState({
            speechInProgress: true
        })
    }

    onSpeechEndHandler(e) {
        this.setState({
            speechInProgress: false
        }, () => {
            Voice.stop();
        })
    }

    onSpeechResultsHandler(e) {
        this.setState({
            results: e.value
        }, () => {
            var z = this.state.results.filter(function (val) {
                return keywords.indexOf(val.toLowerCase()) != -1;
            });
            var check = z.length;
            if (check > 0) {
                speakMessage("Sure thing, let me take you through the next steps. You may click on the highlighted option to confirm your selection");
                this["Change mobile number5"].measure((x, y, width, height, pageX, pageY) => {
                    console.log(x, y, width, height, pageX, pageY);
                    this.setState({
                        active: 5
                    }, () => {
                        this._scrollView.scrollTo({ y: pageY, animated: true })
                    })

                });
                // this.props.start();
            }
        });
    }

    componentDidMount() {
        Permissions.request(PERMISSIONS.ANDROID.RECORD_AUDIO).then(res => {
            console.log(res);
        });
        Voice.isAvailable().then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
        Tts.addEventListener('tts-start', (event) => this.setState({speechInProgress:true}));
        Tts.addEventListener('tts-finish', (event) => this.setState({speechInProgress:false}));
        Tts.addEventListener('tts-cancel', (event) => this.setState({speechInProgress:false}));
        speakMessage("Hello Dunking, I'm your virtual assistant, how may I help you");
    }

    onStartButtonPress(e) {
        Voice.start('en-US', {
            "RECOGNIZER_ENGINE": "GOOGLE",
            "EXTRA_PARTIAL_RESULTS": true
        }).then(onFulfilled => {
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View pointerEvents={this.state.speechInProgress?'none':'auto'}>
                    <StatusBar barStyle='dark-content' backgroundColor="white" />
                    <ScrollView ref={view => this._scrollView = view} showsVerticalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 3 }}>
                            <Text style={{ color: 'red', borderBottomWidth: 3, borderBottomColor: 'red', padding: 10, fontSize: 16 }}>Manage</Text>
                            <Text style={{ color: 'black', padding: 10, fontSize: 16 }}>Controls</Text>
                        </View>
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Here's what's happenining with your device.</Text>
                            <Text style={{ fontSize: 16, marginTop: 10 }}>It's easy to adjust your device setting right here</Text>
                            <View
                                style={{
                                    height: 5,
                                    marginTop: 10,
                                    backgroundColor: 'black'
                                }}
                            />
                            <View style={{ padding: 5 }}>
                                <Text style={{ marginTop: 10, fontSize: 16 }} onPress={() => {
                                    speakMessage("SSure thing, let me take you through the next steps. You may click on the highlighted option to confirm your selection");
                                    this["Change mobile number5"].measure((x, y, width, height, pageX, pageY) => {
                                        console.log(x, y, width, height, pageX, pageY);
                                        this.setState({
                                            active: 5
                                        }, () => {
                                            this._scrollView.scrollTo({ y: pageY, animated: true })
                                        })
                    
                                    });
                                    // this.props.start();
                                }}>Ready to upgrade</Text>
                                <View
                                    style={{
                                        height: 10,
                                        marginTop: 10,
                                        backgroundColor: 'grey'
                                    }}
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={{
                            height: 50, backgroundColor: 'black', borderRadius: 25,
                            justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 160,
                            marginTop: 20, marginBottom: 20
                        }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Upgrade now</Text>
                        </TouchableOpacity>
                        <FlatList
                            // ref={(ref) => { this.flatListRef = ref; }}
                            data={Options}
                            contentContainerStyle={{ margin: 10 }}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({
                                                active: -1
                                            }, () => {
                                                this.props.navigation.navigate(item.routeName);
                                            })
                                        }}
                                        style={[{
                                            flexDirection: 'row', justifyContent: 'space-between',
                                            alignItems: 'center', paddingTop: 20, paddingBottom: 20
                                        }, index === this.state.active ? {
                                            shadowColor: "red",
                                            shadowOffset: {
                                                width: 0,
                                                height: 2,
                                            },
                                            shadowOpacity: 0.51,
                                            shadowRadius: 13.16,
                                            elevation: 20,
                                            backgroundColor: '#ddb8ca'
                                        } : {}]}
                                    >
                                        <Text ref={(ref) => { this[`${item.name}${index}`] = ref; }}>{item.name}</Text>
                                        <Image style={{ height: 20, width: 20, resizeMode: 'contain' }} source={require('../assets/rightarrow.png')} />
                                    </TouchableOpacity>
                                    // <CopilotStep
                                    //     order={index == this.state.active ? 1 : -1}
                                    // >
                                    //     <WalkthroughableTouchableOpacity
                                    //         onPress={() => { this.props.navigation.navigate(item.routeName); 
                                    //         }}
                                    //         style={{ flexDirection: 'row', justifyContent: 'space-between', 
                                    //         alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}
                                    //     >
                                    //         <Text ref={(ref) => { this[`${item.name}${index}`] = ref; }}>{item.name}</Text>
                                    //         <Image style={{ height: 20, width: 20, resizeMode: 'contain' }} source={require('../assets/rightarrow.png')} />
                                    //     </WalkthroughableTouchableOpacity></CopilotStep>
                                )
                            }}
                            keyExtractor={(item, index) => item.name}
                        />
                    </ScrollView>
                    <TouchableOpacity
                        onPress={() => {
                            this.onStartButtonPress();
                        }}
                        disabled={this.state.speechInProgress}
                        style={{ position: 'absolute', bottom: 10, right: 10, }}>
                        <Image style={{ height: 40, width: 40, resizeMode: 'contain', tintColor: this.state.speechInProgress ? 'blue' : 'black' }}
                            source={require('../assets/record.png')} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView >
        )
    }
}

const TooltipComponent = ({
    isFirstStep,
    isLastStep,
    handleNext,
    handlePrev,
    handleStop,
    currentStep,
}) => (
        <TouchableWithoutFeedback onPress={() => handleStop()}>
            <View />
        </TouchableWithoutFeedback>
    );

const StepNumberComponent = ({
    isFirstStep,
    isLastStep,
    currentStep,
    currentStepNumber,
}) => (
        <View />
    );

const style = {
    paddingBottom: 0,
    paddingTop: 0,
    padding: 0,
    paddingHorizontal: 0,
    height: 0,
    justifyContent: 'center'
};

export default copilot({
    animated: true,
    overlay: "svg",
    tooltipComponent: TooltipComponent,
    androidStatusBarVisible: false,
    stepNumberComponent: StepNumberComponent,
    tooltipStyle: style,
    labels: {
        finish: 'ok'
    },
    backdropColor: "rgba(50, 50, 100, 0.9)",
    verticalOffset: 25,
})(HomeManage);