import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

export default class Help extends Component{
    static navigationOptions = ({navigation}) => ({
        title: "Help",
        headerLeft:<TouchableOpacity onPress={()=>navigation.goBack()} style={{height:20,width:40,marginLeft:10}}>
            <Image source={require('../assets/goBack.png')} style={{height:'100%',width:'100%',resizeMode:'contain'}}/>
        </TouchableOpacity>,
        headerRight:<TouchableOpacity onPress={()=>navigation.navigate(RouteNames.HomeStack.help)} style={{height:20,width:40,marginRight:10}}>
            <Image source={require('../assets/ques.png')} style={{height:'100%',width:'100%',resizeMode:'contain'}}/>
        </TouchableOpacity>
    });

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{flex:1}}>
                <Text>Help</Text>
            </View>
        )
    }
}