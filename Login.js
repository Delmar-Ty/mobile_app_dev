import { StyleSheet, Text, View, ImageBackground, Button, TextInput } from 'react-native';
import React from 'react';
import bgImage from './assets/home-orange-gradient.png'


const LoginScreen = ({navigation}) => ( 
    <View style={styles.container}>
        <ImageBackground source={bgImage} style={styles.image}>
        <View style = {styles.buttonStyle}>
            <Text style = {styles.returnbutton} onPress={() => navigation.navigate('Home', {name: 'Home'})}>Home</Text>
            </View>
        <View style = {styles.form}>
            <Text style = {styles.header}>Log In</Text>
            <View style = {styles.formquestions}>
              <TextInput style = {styles.question}placeholder="Enter Email" />
              <TextInput
                style = {styles.question}
                secureTextEntry={true}
                placeholder="Enter Password"
              />
            </View>
        </View>
        <Text style = {styles.forgot}>Forgot Password?</Text>
        <View style = {styles.submitStyle}>
          <Text style = {styles.submit}>Submit</Text>
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
      returnbutton: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500',
        padding: '10%'
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
    //Submit button styling
      submitStyle: {
        width: '50%',
        height: '6.5%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '25%',
        marginTop: 25,

      },
      submit: {
        width: '100%',
        height: '100%',
        color: '#f5f5f5',
        textAlign: 'center',
        fontSize: 20,
        padding: '5%',
        borderWidth: 2,
        borderColor: '#fff',  
        borderRadius: 5,
      },
      
})

export default LoginScreen;