import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

export default class Second extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{flex:1}}>
                <Text>Second</Text>
            </View>
        )
    }
}