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
import DashboardUnscuffed from './DashboardUnscuffed.js';
import FrybreadScreen from './Frybread.js';
import JeansScreen from './Jeans.js';
import ArrestScreen from './Arrests.js';
import CalendarScreen from './Calendar.js';

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

            <Stack.Screen
            name='DashboardUnscuffed'
            component={DashboardUnscuffed}
            options = {{
              headerShown: false
            }}
            />
            <Stack.Screen
            name='Frybread'
            component={FrybreadScreen}
            options = {{
              headerShown: false
            }}
            />
            <Stack.Screen
            name='Jeans'
            component={JeansScreen}
            options = {{
              headerShown: false
            }}
            />
            <Stack.Screen
            name='Arrests'
            component={ArrestScreen}
            options = {{
              headerShown: false
            }}
            />
            <Stack.Screen
            name='Calendar'
            component={CalendarScreen}
            options = {{
              headerShown: false
            }}
            />
        </Stack.Navigator>
    </NavigationContainer>
);


export default App;