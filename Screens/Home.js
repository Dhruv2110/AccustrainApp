import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Platform, Linking } from 'react-native'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import Header from '../Components/Header'

const Home = () => {
    let [fontsLoaded] = useFonts({
        'OpenSans': require('../assets/fonts/OpenSans-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const callUs = () => {
        let phoneNumber = ''
        if (Platform.OS === 'android') {
            phoneNumber = 'tel:+918818000994';
        }
        else {
            phoneNumber = 'telprompt:+918818000994';
        }
        Linking.openURL(phoneNumber);
    }

    const whatsapp = () => {
        let msg = 'Hi';
        if (msg) {
            let url = "whatsapp://send?text=" + msg + "&phone=918818000994";
            Linking.openURL(url)
        } else {
            alert("Please enter message to send");
        }
    }
    return (
        <>
            <Header />
            <ScrollView style={{ flex: 1, backgroundColor: '#a6a6a6' }}>

                <View style={styles.cardHeading}>
                    <Text style={styles.heading}>Accustrain</Text>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={callUs}>
                            <View style={styles.call}>
                                <Ionicons name="call-outline" size={27} color="#194B7E" />
                                <Text style={{ fontSize: 20, color: '#194B7E', marginHorizontal: 10 }}>Call Now</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={whatsapp}>
                            <View style={styles.wa}>
                                <Ionicons name="logo-whatsapp" size={27} color="green" />
                                <Text style={{ fontSize: 20, color: 'green', marginHorizontal: 5 }}>Whatsapp</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    <View style={styles.imageRow1}>
                        <Image
                            source={require('../assets/images/4.jpg')}
                            style={styles.imageSize}
                        />
                        <Image
                            source={require('../assets/images/2.jpg')}
                            style={styles.imageSize}
                        />
                    </View>
                </View>
                <View style={styles.cardAbout}>
                    <Text style={{ fontSize: 25, fontStyle: 'italic', fontWeight: 'bold', color: '#194B7E' }}>About Us:</Text>
                    <Text style={{ fontFamily: 'OpenSans', fontSize: 14 }}>ACCUSTRAIN is manufacturer of electronics weigh machine and weigh bridge product.
                        The range covers weigh scale from 1kg capacity to weigh bridge 100 ton capacity.
                        We know that our future success depends upon the skills and commitment of our employees and as market leaders therefore,
                        we aim to recruit the best peoples in our business.</Text>
                </View>
                <View style={styles.cardSolution}>
                    <Text style={{ fontSize: 25, fontStyle: 'italic', fontWeight: 'bold', color: '#194B7E' }}>Our Solutions:</Text>
                    <Text style={styles.AllText}>* Electronics Weigh Bridge.</Text>
                    <Text style={styles.AllText}>* Platform.</Text>
                    <Text style={styles.AllText}>* Table-Top.</Text>
                    <Text style={styles.AllText}>* Heavy duty Low Profile platform.</Text >
                    <Text style={styles.AllText}>* Weigh indicator.</Text >
                    <Text style={styles.AllText}>* Software solution.</Text >
                    <Text style={styles.AllText}>* Load cells.</Text >
                    <Text style={styles.AllText}>* Accessories.</Text >
                </View>
                <View style={styles.cardProductUse}>
                    <Text style={{ fontSize: 25, fontStyle: 'italic', fontWeight: 'bold', color: '#194B7E' }}>Our Products Use In:</Text>
                    <Text style={styles.AllText}>* Construction Industry</Text>
                    <Text style={styles.AllText}>* Agriculture and Farming</Text>
                    <Text style={styles.AllText}>* Chemical and pharma</Text>
                    <Text style={styles.AllText}>* Food and Beverages</Text >
                    <Text style={styles.AllText}>* Manufacturing</Text >
                    <Text style={styles.AllText}>* Transport and Logistics</Text >
                    <Text style={styles.AllText}>* Waste and Recycling</Text >
                    <Text style={styles.AllText}>* Mining and Aggregates</Text >
                    <Text style={styles.AllText}>* Post Mail and Shipping</Text >
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    cardHeading: {
        backgroundColor: '#ffffff',
        // borderWidth:2,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 15,
        elevation: 15,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    heading: {
        fontFamily: 'OpenSans',
        fontSize: 64,
        fontStyle: 'italic',
        textAlign: 'center',
        color: '#194B7E',
        marginVertical: 0,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    call: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 5,
        //alignContent:'stretch',
        height: 45,
        width: 150,
        backgroundColor: 'white',
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#194B7E',

    },
    wa: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 5,
        height: 45,
        width: 150,
        backgroundColor: 'white',
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'green'
    },
    imageContainer: {
        justifyContent: 'space-between',
        // alignItems:'stretch',
        marginHorizontal: 10,
        marginVertical: 10,
        // borderWidth:2,
        height: '12%',
        // paddingVertical:15

    },
    imageRow1: {
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    imageRow2: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    imageSize: {
        width: 170,
        height: 150
    },
    cardAbout: {
        backgroundColor: 'white',
        //borderWidth:2,
        borderRadius: 15,
        marginTop: 20,
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 10,
        height: 230,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    cardSolution: {
        backgroundColor: 'white',
        //borderWidth:2,
        borderRadius: 15,
        marginHorizontal: 10,
        marginVertical: 10,
        // marginBottom:50,
        padding: 10,
        height: 230,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    cardProductUse: {
        backgroundColor: 'white',
        //borderWidth:2,
        borderRadius: 15,
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 10,
        height: 245,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    AllText: {
        fontFamily: 'OpenSans',
        fontSize: 14
    }
})

export default Home