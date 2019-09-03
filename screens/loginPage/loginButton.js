import React from 'react';

import {
    StyleSheet,
    AsyncStorage,
    TouchableOpacity,
    Text,
    ActivityIndicator,
    Alert
} from 'react-native';


export default class LoginButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    tryLogin = () => {
        if (this.props.usr == '' || this.props.psw == '') {
            Alert.alert('Compila entrambi i campi!')
        }
        else {
            this.fetchUsr(this.props.usr, this.props.psw)
        }
    }

    fetchUsr = async (usr, psw) => {
        this.setState({ isLoading: true })
        try {
            let formData = new FormData();
            formData.append('username', usr.toLocaleLowerCase())
            formData.append('password', psw)
            const res = await fetch(`http://liloautogestito.ch/API/check_login_liceo.py`, {
                method: 'POST',
                body: formData
            }
            );
            const data = await res.json();
            if (data['login']) {
                await AsyncStorage.setItem('res', data['ses'])
                    .then(() => this.props.navigation.navigate('Main'))
            }
            else {
                this.setState({ isLoading: false })
                Alert.alert('username o password errati, riprovare')
            }
        } catch (error) {
            this.setState({ isLoading: false })
            Alert.alert(error.toString())
        }
    }

    render() {
        return (
            <TouchableOpacity style={styles.buttonLogin} onPress={this.tryLogin}>
                {this.state.isLoading ?
                    <ActivityIndicator /> :
                    <Text style={styles.buttonText}>
                        Login
                    </Text>}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonLogin: {
        width: 320,
        marginTop: 20,
        paddingVertical: 15,
        backgroundColor: '#2980b9'
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF'
    },
})