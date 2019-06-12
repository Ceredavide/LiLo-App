import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, AsyncStorage, Alert, Linking, ImageBackground } from 'react-native';

import { createStackNavigator, createBottomTabNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Card, Chip} from 'react-native-paper'

import Icons from 'react-native-vector-icons/MaterialIcons'

import HomeScreen from './screens/homePage/HomeScreen';
import AssenzeScreen from './screens/assenzePage/AssenzeScreen';
import WebScreen from './screens/webPage/WebScreen';

export default class App extends React.Component {
  state = {
  };

  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <Screen />
      </View>
    );
  }
}
// **********************************LOADINGSCREEN*******************************************************
class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('res');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken !== null ? 'Main' : 'Login');
  };

  render() {
    return (
      <ImageBackground source={require('./assets/images/splash.png')} style={{ width: '100%', height: '100%' }} />
    );
  }
}

// **********************************LOGIN***************************************************************

class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      usr: '',
      psw: '',
      data: [],
    }
  }

  static navigationOptions = {
    header: null
  }

  buttonCLickListener = async () => {
    const { usr } = this.state;
    const { psw } = this.state;
    if (usr == '' || psw == '') { Alert.alert('Compila entrambi i campi!') }
    else {
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
          Alert.alert('username o password errati, riprovare')
        }
      } catch (error) {
        Alert.alert(error.toString())
      }
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.containerLogin}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.Title}
            source={require('./assets/images/Logo.png')}
          />
          <Image
            style={styles.logo}
            source={require('./assets/images/Scuola.jpeg')}
          />
          <View style={styles.containerFrom}>
            <TextInput
              placeholder="username"
              autoCapitalize="none"
              style={styles.input}
              onChangeText={usr => this.setState({ usr })}
            />
            <TextInput
              secureTextEntry
              placeholder="password"
              autoCapitalize="none"
              style={styles.input}
              onChangeText={psw => this.setState({ psw })}
            />
            <TouchableOpacity
              onPress={this.buttonCLickListener}
              style={styles.buttonLogin}
            >
              <Text style={styles.buttonText}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.fromContainer}>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

// **********************************SETTINGS***************************************************************

class SettingsScreen extends React.Component {
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
      source={{uri:  'http://liloautogestito.ch/API/pic/impostazioni.png' + "#" + `${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}`}} 
      />
        <Chip icon="error" onPress={() => Linking.openURL('mailto:root@liloautogestito.ch')} >root@liloautogestito.ch</Chip>
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

//***********************************************************NAVIGAZIONE*************************************************************************************

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
};

const AssenzeStack = createStackNavigator({
  Assenze: AssenzeScreen,
});

AssenzeStack.navigationOptions = {
  tabBarLabel: 'Assenze',
};

const WebStack = createStackNavigator({
  Autogestite: WebScreen,
});

WebStack.navigationOptions = {
  tabBarLabel: 'Galleria',
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Impostazioni',
};

const TabNav = createBottomTabNavigator({
  Home: HomeStack,
  Assenze: AssenzeStack,
  Web: WebStack,
  Settings: SettingsStack
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icons;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home'
        }
        else if (routeName === 'Assenze') {
          iconName = 'people'
        }
        else if (routeName === 'Web') {
          iconName = 'collections'
        }
        else if (routeName === 'Settings') {
          iconName = 'settings'
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }), tabBarOptions: {
      activeTintColor: '#5ea6e5',
      inactiveTintColor: 'gray'
    }
  }
);

const LoginStack = createStackNavigator({
  Login: LoginScreen
})

const Screen = createAppContainer(createSwitchNavigator({
  Auth: AuthLoadingScreen,
  Login: LoginStack,
  Main: TabNav,
},
  {
    initialRouteName: 'Auth'
  }));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // **********************************LOGIN***************************************************************
  card: {
    width: wp('90%'),
    height: hp('30%'),
    marginTop: hp('5%')
  },
  containerLogin: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  Title: {
    width: 150,
    height: 130,
    marginBottom: 30
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 320,
    height: 106,
    marginBottom: 10
  },
  containerFrom: {
    padding: 20
  },
  input: {
    height: 40,
    width: 320,
    marginTop: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#FFF'
  },
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
  // **********************************SETTINGS***************************************************************
  image:{
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
});
