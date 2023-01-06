import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home.js';
import LoginScreen from './Login.js';
import SignupScreen from './Signup.js';
import StudentSignupScreen from './StudentSignup.js';
import ParentSignupScreen from './ParentSignup.js';
import TeacherSignupScreen from './TeacherSignup.js';
import StudentSignupScreen2 from './StudentSignup2.js';
import DashboardScreen from './Dashboard.js';

const Stack = createNativeStackNavigator();

const App = () => ( 
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name = "Home"
            component = {HomeScreen}
            options ={{
              headerShown: false
            }}
            />

            <Stack.Screen 
            name = "Login"
            component = {LoginScreen}
            options ={{
              headerShown: false
            }}/>

            <Stack.Screen 
            name = "Signup"
            component = {SignupScreen}
            options ={{
              headerShown: false
            }}/>

            <Stack.Screen 
            name = "StudentSignup"
            component = {StudentSignupScreen}
            options ={{
              headerShown: false
            }}/>
            
            <Stack.Screen 
            name = "StudentSignup2"
            component = {StudentSignupScreen2}
            options ={{
              headerShown: false
            }}/>

            <Stack.Screen 
            name = "ParentSignup"
            component = {ParentSignupScreen}
            options ={{
              headerShown: false
            }}/>

            <Stack.Screen 
            name = "TeacherSignup"
            component = {TeacherSignupScreen}
            options ={{
              headerShown: false
            }}/>

            <Stack.Screen 
            name = "Dashboard"
            component = {DashboardScreen}
            options ={{
              headerShown: false
            }}/>
        </Stack.Navigator>
    </NavigationContainer>
);


export default App;