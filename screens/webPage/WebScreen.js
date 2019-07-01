import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import MakeItRain from 'react-native-make-it-rain';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class WebScreen extends React.Component {
    static navigationOptions = {
        title: 'Liam è un BUFU',
        headerStyle: {
            backgroundColor: '#5ea6e5',
            paddingBottom: 10
        },
        headerTitleStyle: { fontSize: 25 },
        headerTintColor: '#fff'
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                style={{height: hp('60%'), width: wp('80%'), marginBottom: hp('5%')}}
                source={require('../../assets/images/liam.jpeg')}
                />
                <Text
                style={{fontSize: hp('4%')}}
                >Lui ride, io no
                </Text>
                <MakeItRain
                    numMoneys={20}
                    duration={10000}
                    moneyComponent={<Image
                        source={require('../../assets/images/birra.png')}
                        style={{ height: hp('7%'), width: hp('7%') }}
                    />}
                />
            </View>
        );
    }
}