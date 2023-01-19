import { StyleSheet, Text, View, ImageBackground, Image, Button, Pressable , TextInput} from 'react-native';
import React from 'react';
import bannerImg from './assets/blue-gradient.png'
import home from './assets/home-icon.png'
import assignments from './assets/clipboard-icon.png'
import calendar from './assets/calendar-icon.png'
import camera from './assets/camera-icon.png'
import phone from './assets/phone-icon.png'
import whitelogo from './assets/white-logo.png'
import usericon from './assets/usericon.png'

const UserScreen = ({navigation}) => {
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
                <View style = {styles.body.studentinfo}>
                    <Text style = {styles.body.studentinfo.title}>Student Info</Text>
                    <View style={styles.body.studentinfo.studentpic}>
                        <Image source={usericon} style={styles.body.studentinfo.studentpic.img}/>
                    </View>
                    <Text style = {styles.body.studentinfo.name}>Name</Text>
                </View>
                <View style = {styles.body.studentinformationboxes}>
                    <TextInput style = {styles.body.studentinformationboxes.box} value = {'Grade: '} editable={false}/>
                    <TextInput style = {styles.body.studentinformationboxes.box} value = {'Campus: '} editable={false}/>
                    <TextInput style = {styles.body.studentinformationboxes.box} value = {'Program:'} editable={false}/>
                    <TextInput style = {styles.body.studentinformationboxes.box} value = {'School Email: '} editable={false}/>
                    <TextInput style = {styles.body.studentinformationboxes.box} value = {"Parent's Phone Number: "} editable={false}/>
                    <TextInput style = {styles.body.studentinformationboxes.box} value = {'Address: '} editable={false}/>
                </View>
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
        studentinfo:{
            width: '100%',
            height: '40%',
            justifyContent: 'center',
            alignItems: 'center',
            studentpic:{
                backgroundColor: 'gray',
                aspectRatio: 1/1,
                borderRadius: 1000,
                padding: '2.5%',
                justifyContent: 'center',
                alignItems: 'center',
                img:{
                    aspectRatio: 1/1,
                    width: '70%',
                    height: '70%',
                    borderRadius: 1000,
                }
            },
            title:{
                fontSize: 20,
                fontWeight: '600'
            },
            name:{
                fontSize: 20,
                fontWeight: '600',
            }
        },
        studentinformationboxes:{
            width: '100%',
            height: '60%',
            box:{
                fontSize: 17.5,
                paddingVertical: '3%',
                borderTopWidth: 1,
                borderColor: 'black',
                color: '#F57F20',
                fontWeight: '600',
                paddingLeft: '5%'
            }
        }
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

export default UserScreen;