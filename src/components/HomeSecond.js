import React, {Component} from 'react';
import {
    View,
    Text,
    StatusBar,
    Platform
} from 'react-native';

const isAndroid = Platform.OS=="android"?true:false;
export default class HomeSecond extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('dark-content');
            isAndroid && StatusBar.setBackgroundColor('blue');
        });
    }

    componentWillUnmount() {
        this._navListener.remove();
    }


    render(){
        return(
            <View style={{flex:1,backgroundColor:'grey'}}>
                <Text>HomeSecond</Text>
            </View>
        )
    }
}