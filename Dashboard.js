import { StyleSheet, Text, View, ImageBackground, Image, Button, Pressable } from 'react-native';
import React from 'react';
import bannerImg from './assets/blue-gradient.png'
import home from './assets/home-icon.png'
import assignments from './assets/clipboard-icon.png'
import calendar from './assets/calendar-icon.png'
import camera from './assets/camera-icon.png'
import phone from './assets/phone-icon.png'
import campus from './assets/central-campus-building-a.png'



const DashboardScreen = ({navigation}) => ( 
    <View style={styles.container}>
        <ImageBackground style = {styles.bannertop} source = {bannerImg}/>
        <ImageBackground style = {styles.campusback} source = {campus}/>
        <View style = {styles.campustext}>
            <Text style = {styles.campustexttext}>Central Campus</Text>
        </View>
        <View style = {styles.campusnews}>
            <View style = {styles.news}>
                <Text>Aviation Fry Bread Sale</Text>
            </View>
            <View style = {styles.news}>
                <Text>Coding Bucket Jeans</Text>
            </View>
            <View style = {styles.news}>
                <Text>Law & Public Safety Arrest Fundraiser</Text>
            </View>
        </View>

        <ImageBackground style = {styles.bannerbot} source = {bannerImg}/>
        <View style = {styles.bottomicons}>
            <Image style = {styles.buttonicon} onPress={() => navigation.navigate('Home', {name: 'Home'})} source = {home}/>
            <Image style = {styles.buttonicon} source = {assignments}/>
            <Image style = {styles.buttonicon} source = {calendar}/>
            <Image style = {styles.buttonicon} source = {camera}/>
            <Image style = {styles.buttonicon} source = {phone}/>
        </View>
        
        {/*Top Banner*/}
        {/* <ImageBackground style = {styles.bannertop} source = {bannerImg}>

        </ImageBackground> */}
    </View>
);

const styles = StyleSheet.create({
//main container
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannertop:{
    width: '100%',
    height: '40%',
    position: 'absolute',
    top: 0,
  },
  bannerbot:{
    width: '100%',
    height: '35%',
    position: 'absolute',
    bottom: 0,
    transform: [{rotate: '180deg'}]
  },
  bottomicons:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '1%',
    height: '10%',
    width: '50%',
  },
  buttonicon:{
    width: '35%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    margin: '2%',
    borderRadius: 10
  },
  campusback:{
    bottom: '10%',
    width: '100%',
    height: '50%'
  },
  campustext:{
    backgroundColor: 'rgba(12,35,64, 0.5)',
    bottom: '51.25%',
    padding: '2.5%',
    borderRadius: '5%'
},
  campustexttext:{
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800'
  },
  campusnews:{
    display: 'flex',
    flexDirection: 'column',
  },
  news:{
    marginTop: '5%',
    marginBottom:'5%',
    backgroundColor: '#F57F20',
    padding: '10%',
    bottom: '20%'
  }
  
});



export default DashboardScreen;