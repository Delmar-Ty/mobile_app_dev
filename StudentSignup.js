import { StyleSheet, Text, View, ImageBackground, Button, TextInput } from 'react-native';
import React from 'react';
import bgImage from './assets/home-orange-gradient.png'

const campuses = ["Central", "Southwest", "Northeast", "Northwest"]


const StudentSignupScreen = ({navigation}) => {
  const nameXp = /(\d|\W)/g;
  const emailXp = /(\w+@)(\w+)([-\.]\w+)?\.(org|net|com)/;

  let formErr = {
    first: false,
    last: false,
    email: false,
    campus: false,
    password: false,
    confirm: true
  };

  let password = '';

  return (
    <View style={styles.container}>
        <ImageBackground source={bgImage} style={styles.image}>
        <View style = {styles.buttonStyle}>
        <Text title='Sign Up' style = {styles.returnbutton} onPress={() => navigation.navigate('Home', {name: 'Home'})}>Back</Text>
            </View>
        <View style = {styles.form}>
            <Text style = {styles.header}>Sign Up</Text>
            <View style = {styles.formquestions}>
              <TextInput style = {styles.question}placeholder="First Name" onChange={(text) => {
                if (text.match(nameXp)) {
                  formErr.first = true;
                } else {
                  formErr.first = false;
                }
              }}/>
              <TextInput style = {styles.question}placeholder="Last Name" onChange={(text) => {
                if (text.match(nameXp)) {
                  formErr.last = true;
                } else {
                  formErr.last = false;
                }
              }}/>
              <TextInput style = {styles.question}placeholder="Email" onChange={(text) => {
                if (!text.match(emailXp)) {
                  formErr.email = true;
                } else {
                  formErr.email = false;
                }
              }}/>
              <TextInput style={styles.question} placeholder={'Campus'} onChange={(text) => {
                let campus = text.toUpperCase();
                switch (campus) {
                  case 'CENTRAL':
                    formErr.campus = false;
                    break;
                  
                  case 'NORTHWEST':
                    formErr.campus = false;
                    break;
                  
                  case 'NORTHEAST':
                    formErr.campus = false;
                    break;

                  case 'SOUTHWEST':
                    formErr.campus = false;
                    break;

                  default:
                    formErr.campus = true;
                }
              }}/>
              <TextInput style = {styles.question}placeholder="Password" onChange={(text) => {
                password = text;
                if (text.length < 8) {
                  formErr.password = true;
                } else {
                  formErr.password = false;
                }
              }}/>
              <TextInput style = {styles.question}placeholder="Confirm Password" onChange={(text) => {
                if (password !== text) {
                  formErr.confirm = true;
                } else {
                  formErr.confirm = false;
                }
              }}/>
            </View>
        </View>
        <View style = {styles.nextStyle}>
          <Text style = {styles.next} onPress={() => navigation.navigate('Login', {name: 'Login'})}>Submit</Text>
        </View>
        {/* <View style = {styles.circlebox}>
          <Text style = {styles.circle}>a</Text>
        </View>
        <View style = {styles.circlebox}>
          <Text style = {styles.emptycircle}>a</Text>
        </View> */}
        
        </ImageBackground>
    </View>
  );
};

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
        paddingTop: 0,
      },
      header: {
        justifyContent: 'center',
        fontSize: 35,
        color: '#f5f5f5',
        fontWeight: '800'
      },
      question: {
        textAlign: 'center',
        backgroundColor: 'rgba(245, 245, 245, 0.30)',
        borderRadius: 5,
        marginTop: '8%',
        height: '100%',
        width: '100%',
        fontSize: 20,
      },
      formquestions:{
        height: '25%',
        width: '75%',
        marginTop: 20
      },
    //Submit button styling
      nextStyle: {
        width: '50%',
        height: '6.5%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '25%',
        marginTop: 375,

      },
      next: {
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
      circlebox: {
        textAlign: 'center'
      },
      circle: {
        color: '#0C2340',
        backgroundColor: '#0C2340',
        height: 30,
        width: 30,
        borderRadius: 15,
        marginTop: 100,
      },
      emptycircle: {
        color: '#FFFFFF',
        backgroundColor: '#FFFFFF',
        height: 30,
        width: 30,
        borderRadius: 15,
        marginTop: 100,
        marginLeft: '20%'
      }
})

export default StudentSignupScreen;