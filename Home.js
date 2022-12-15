import { StyleSheet, Text, View, ImageBackground, Image, Button, Pressable } from 'react-native';
import React from 'react';
import { useState } from 'react';
import bgImage from './assets/home-orange-gradient.png'
import logoImage from './assets/west-mec-logo.png'


const HomeScreen = ({navigation}) => ( 
    <View style={styles.container}>
        <ImageBackground source={bgImage} style={styles.image}>
          <View style={styles.logoContainer}>
            <Image source = {logoImage} style = {styles.logo}></Image>
          </View>
          <View style = {styles.buttonContainer}>
            <View style={ButtonStyle.body}>
                <Pressable style={ButtonStyle.button} onPress={() => navigation.navigate('Login', {name: 'Login'})}>
                    <Text style={ButtonStyle.text}>
                        Log In
                    </Text>
                </Pressable>
            </View>

            <View style={ButtonStyle.body}>
                <Pressable style={ButtonStyle.button} onPress={() => navigation.navigate('Signup', {name: 'Signup'})}>
                    <Text style={ButtonStyle.text}>
                        Sign Up
                    </Text>
                </Pressable>
            </View>
            <Text style = {styles.licensinginfo}>Licensing Terms & Conditions</Text>
          </View>
        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
//main container
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%'
  },
//west-mec logo
  logoContainer: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: '100%',
    aspectRatio: 1/1
  },
//container for the sign up and log in buttons
  buttonContainer: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
//log in/sign up button styling
//link to go to license info style
  licensinginfo: {
    textDecorationLine: 'underline',
    color: '#f5f5f5',
    marginBottom: '15%'
  }
});

const ButtonStyle = StyleSheet.create({
    body: {
        width: '75%',
        height: '20%',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 5,
        marginBottom: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#f5f5f5',
        fontSize: 20,
    }
});



export default HomeScreen;