import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    TextInput
} from 'react-native';
import RouteNames from '../navigators/RouteNames';

export default class EnterZip extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Enter Zip",
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
            zipCode: ""
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar barStyle='dark-content' backgroundColor="white" />
                <View>
                    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }} showsVerticalScrollIndicator={false}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>What's their ZIP code?</Text>
                        <Text style={{ fontSize: 16, marginTop: 10 }}>The fist six digits of their new phone number are based on their ZIP code.</Text>
                        <View
                            style={{
                                height: 5,
                                marginTop: 10,
                                backgroundColor: 'black'
                            }}
                        />
                        <Text style={{ fontSize: 16, marginTop: 10, color: 'grey' }}>ZIP code</Text>
                        <TextInput
                            value={this.state.zipCode}
                            keyboardType='number-pad'
                            maxLength={6}
                            underlineColorAndroid="transparent"
                            onChangeText={(value)=>this.setState({zipCode:value})}
                            style={{ borderWidth: 1, borderColor: 'grey', borderBottomWidth: 3, borderBottomColor: 'black', padding: 10, marginTop: 10 }}
                        />
                        {
                            this.state.zipCode?<TouchableOpacity 
                            onPress={()=>this.props.navigation.navigate(RouteNames.HomeStack.selectNumber,{zipCode:this.state.zipCode})}
                            style={{
                                height: 50, backgroundColor: 'black', borderRadius: 25,
                                justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 160,
                                marginTop: 40
                            }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Next</Text>
                            </TouchableOpacity>:null
                        }
                    </ScrollView>
                </View>
                <TouchableOpacity style={{ position: 'absolute', bottom: 10, right: 10, }}>
                    <Image style={{ height: 40, width: 40, resizeMode: 'contain', tintColor: 'blue' }} source={require('../assets/record.png')} />
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}