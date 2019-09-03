import React from 'react';

import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
    Linking,
    Alert
} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Chip } from 'react-native-paper'

export default class SettingsPage extends React.Component {

    static navigationOptions = {
        title: 'Impostazioni',
        headerStyle: {
            backgroundColor: '#5ea6e5',
            paddingBottom: 10
        },
        headerTitleStyle: { fontSize: 22 },
        headerTintColor: '#fff'
    }

    logout = async () => {
        await AsyncStorage.clear()
            .then(() => this.props.navigation.navigate('Login'))
    }

    render() {
        return (
            <View style={styles.containerSettings}>
                <Image
                    style={styles.image}
                    source={{ uri: 'http://liloautogestito.ch/API/pic/impostazioni.png' + "#" + `${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}` }}
                />
                <Chip icon="error" onPress={() => Linking.openURL('mailto:root@liloautogestito.ch')} >
                    root@liloautogestito.ch
                </Chip>
                <View style={styles.bottoniContainer}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('http://liloautogestito.ch/API/files/termini_e_condizioni.html')}
                        style={styles.buttonTermini}
                    >
                        <Text style={styles.buttonText}>
                            Termini e Condizioni
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Alert.alert('Coming soon (Liam è lento)')}
                        style={styles.buttonBirra}
                    >
                        <Text style={styles.buttonText}>
                            Offrici una birra
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.logout}
                        style={styles.buttonLogout}
                    >
                        <Text style={styles.buttonText}>
                            Logout
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        marginTop: hp('2%'),
        marginBottom: hp('1%'),
        width: wp('80%'),
        height: wp('80%'),
        borderWidth: 3,
        borderRadius: 2,
        borderColor: 'black'
    },
    containerSettings: {
        flex: 1,
        alignItems: 'center',
        margin: 5
    },
    bottoniContainer: {
        marginBottom: hp('5%')
    },
    buttonTermini: {
        width: 200,
        borderRadius: 60,
        marginTop: hp('2%'),
        paddingVertical: 15,
        backgroundColor: '#0707F5'
    },
    buttonBirra: {
        width: 200,
        borderRadius: 60,
        marginTop: hp('1%'),
        paddingVertical: 15,
        backgroundColor: '#F0D45E'
    },
    buttonLogout: {
        width: 200,
        borderRadius: 60,
        marginTop: hp('7%'),
        paddingVertical: 15,
        backgroundColor: '#EA3323'
    },
    email: {
        textAlign: 'center',
        marginLeft: wp('13%'),
        // marginRight: wp('7%'),
        fontSize: hp('2%')
    },
})