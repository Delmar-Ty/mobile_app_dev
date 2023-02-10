import { StyleSheet, Text, View, ImageBackground, Button, TextInput, Pressable } from 'react-native';
import React from 'react';
import { useState } from 'react';
import bgImage from './assets/home-orange-gradient.png'
import { text } from '@fortawesome/fontawesome-svg-core';


const LoginScreen = ({navigation}) => {
  const [emailAuth, setEmailAuth] = useState(false);
  const [passAuth, setPassAuth] = useState(false);

  const creds = {
    email: 'dschro206@west-mec.org',
    pass: 'password'
  }

  return ( 
    <View style={styles.container}>
        <ImageBackground source={bgImage} style={bgStyle.image}>

          {/*Return Button*/}
          <View style={returnButton.buttonStyle}>
            <Pressable style={returnButton.returnButton} onPress={() => navigation.navigate('Home', {name: 'Home'})}>
                <Text style={returnButton.text}>
                  Home
                </Text>
            </Pressable>
          </View>

          {/*Form*/}
          <View style = {styles.form}>
            <Text style = {styles.header}>Log In</Text>
            <View style = {styles.formquestions}>
              <TextInput style = {styles.question}placeholder="Enter Email" onChangeText={text => {
                if (text === creds.email) {
                  setEmailAuth(true);
                } else {
                  setEmailAuth(false);
                }
              }} />
              <TextInput
                style = {styles.question}
                secureTextEntry={true}
                placeholder="Enter Password"
                onChangeText={text => {
                  if (text === creds.pass) {
                    setPassAuth(true);
                  } else {
                    setPassAuth(false);
                  }
                }}
              />
            </View>
          </View>

          <Text style = {styles.forgot}>Forgot Password?</Text>

          {/*Submit Button*/}
          <View style={submitButton.submitStyle}>
            <Pressable style={submitButton.submit} onPress={() => {
              if (emailAuth === true && passAuth === true) {
                navigation.navigate('Dashboard', {name: 'Dashboard'})
              } else {
                alert('Incorrect Email or Password');
              }
            }}>
                <Text style={submitButton.text}>
                  Submit
                </Text>
            </Pressable>
          </View>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  //main container
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
  
    //Login form
      form: {
        alignItems: 'center',
        paddingTop: 100
      },
      header: {
        justifyContent: 'center',
        fontSize: 35,
        color: '#f5f5f5',
        fontWeight: '700'
      },
      question: {
        textAlign: 'center',
        backgroundColor: 'rgba(245, 245, 245, 0.30)',
        borderRadius: 5,
        margin: 5,
        height: '100%',
        width: '100%',
        fontSize: 20,
      },
      formquestions:{
        height: '25%',
        width: '75%',
        marginTop: 20
      },
      forgot: {
        textAlign: 'center',
        color: '#f5f5f5',
        textDecorationLine: 'underline',
        marginTop: -15
      },
});

const bgStyle = StyleSheet.create({
  //Background Image
  image: {
    width: '100%',
    height: '100%'
  }
});

const returnButton = StyleSheet.create({
  //Home "return" button
  buttonStyle: {
    width: '20%',
    height: '5%',
    margin: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  returnButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10%'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500'
  }
});

const submitButton = StyleSheet.create({
  //Submit button styling
  submitStyle: {
    width: '50%',
    height: '6.5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '25%',
    marginTop: 25,
    borderWidth: 2,
    borderColor: '#fff',  
    borderRadius: 5
  },
  submit: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#f5f5f5',
    textAlign: 'center',
    fontSize: 20,
  }
});

export default LoginScreen;