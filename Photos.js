import { StyleSheet, Text, View, ImageBackground, Image, Button, Pressable } from 'react-native';
import React from 'react';
import bannerImg from './assets/blue-gradient.png'
import home from './assets/home-icon.png'
import assignments from './assets/clipboard-icon.png'
import calendar from './assets/calendar-icon.png'
import camera from './assets/camera-icon.png'
import phone from './assets/phone-icon.png'
import whitelogo from './assets/white-logo.png'
import usericon from './assets/usericon.png'

const PhotoScreen = ({navigation}) => {
    return (
        <View style={styles.page}>

            {/*Header*/}
            <View style={styles.header}>
                <ImageBackground style={styles.header.bgImg} source={bannerImg}>
                    <View style={styles.header.bgImg.container}>
                        <View style={styles.header.bgImg.container.logo}>
                            <Pressable onPress={() => navigation.navigate('Home', {name: 'Home'})}>
                                <Image style={styles.header.bgImg.container.logo.img} source={whitelogo}/>
                            </Pressable>
                        </View>
                        <View style={styles.header.bgImg.container.user.body}>
                            <Pressable onPress={() => navigation.navigate('User', {name: 'User'})} style={styles.header.bgImg.container.user.button}>
                                <Image source={usericon} style={styles.header.bgImg.container.user.img}/>
                            </Pressable>
                        </View> 
                    </View>
                </ImageBackground>
            </View>

            {/*Body*/}
            <View style={styles.body}>
            </View>

            {/*Footer*/}
            <View style={styles.footer}>
                <ImageBackground style={styles.footer.bgImg} source={bannerImg}>
                    <View style={styles.footer.bgImg.container}>
                        <View style={styles.footer.bgImg.container.buttonStyle.body}>
                            <Pressable onPress={() => navigation.navigate('DashboardUnscuffed', {name: 'DashboardUnscuffed'})} style={styles.footer.bgImg.container.buttonStyle.button}>
                                <Image source={home} style={styles.footer.bgImg.container.buttonStyle.img}/>
                            </Pressable>
                        </View>
                        <View style={styles.footer.bgImg.container.buttonStyle.body}>
                            <Pressable onPress={() => navigation.navigate('Calendar', {name: 'Calendar'})} style={styles.footer.bgImg.container.buttonStyle.button}>
                                <Image source={calendar} style={styles.footer.bgImg.container.buttonStyle.img}/>
                            </Pressable>
                        </View>
                        <View style={styles.footer.bgImg.container.buttonStyle.body}>
                            <Pressable onPress={() => navigation.navigate('Photos', {name: 'Photos'})} style={styles.footer.bgImg.container.buttonStyle.button}>
                                <Image source={camera} style={styles.footer.bgImg.container.buttonStyle.img}/>
                            </Pressable>
                        </View>
                        <View style={styles.footer.bgImg.container.buttonStyle.body}>
                            <Pressable onPress={() => navigation.navigate('Contact', {name: 'Contact'})} style={styles.footer.bgImg.container.buttonStyle.button}>
                                <Image source={phone} style={styles.footer.bgImg.container.buttonStyle.img}/>
                            </Pressable>
                        </View>
                        <View style={styles.footer.bgImg.container.buttonStyle.body}>
                            <Pressable onPress={() => navigation.navigate('Assignments', {name: 'Assignments'})} style={styles.footer.bgImg.container.buttonStyle.button}>
                                <Image source={assignments} style={styles.footer.bgImg.container.buttonStyle.img}/>
                            </Pressable>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    header: {
        width: '100%',
        height: '15%',
        bgImg: {
            width: '100%',
            height: '100%',
            container: {
                width: '100%',
                height: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                logo: {
                    aspectRatio: 32 / 19,
                    width: '25%',
                    marginLeft: '5%',
                    img: {
                        width: '100%',
                        height: '100%'
                    }
                },
                user: {
                    body: {
                        aspectRatio: 1 / 1,
                        width: '15%',
                        marginRight: '5%'
                    },
                    button: {
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    },
                    img: {
                        width: '70%',
                        height: '70%'
                    }
                }
            }
        }
    },
    body: {
        width: '100%',
        height: '70%',
    },
    footer: {
        width: '100%',
        height: '15%',
        bgImg: {
            width: '100%',
            height: '100%',
            transform: [{rotate: '180deg'}],
            container: {
                width: '100%',
                height: '100%',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'row',
                transform: [{rotate: '180deg'}],
                buttonStyle: {
                    body: {
                        aspectRatio: 1 / 1,
                        width: '18%',
                    },
                    button: {
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    },
                    img: {
                        width: '70%',
                        height: '70%'
                    }
                }
            }
        },
    }
});

export default PhotoScreen;