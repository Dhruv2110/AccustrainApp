import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'

import Header from '../Components/Header'

const Home = () => {

    return (
        <ScrollView style={{ backgroundColor:'#ffcccc'}}>
        <Header />
            <View style={styles.cardHeading}>
                <Text style={styles.heading}>Accustrain</Text>
            </View>
            <Text style={{ textAlign: 'center', fontSize: 15, marginVertical:10}}>
                <Text style={{ fontStyle: 'italic', color: 'red', fontWeight: 'bold' }}>ACCUSTRAIN</Text> =
                <Text style={{ fontStyle: 'italic', color: 'red', fontWeight: 'bold' }}> ACCU</Text>
                <Text style={{ color: '#194B7E'}}>(accurate)</Text> +
                <Text style={{ fontStyle: 'italic', color: 'red', fontWeight: 'bold' }}> STRAIN</Text>
                <Text style={{ color: '#194B7E' }}>(weight)</Text>
            </Text>
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
                <View style={styles.imageRow2}>
                    <Image
                        source={require('../assets/images/8.jpg')}
                        style={styles.imageSize}
                    />
                    <Image
                        source={require('../assets/images/10.jpg')}
                        style={styles.imageSize}
                    />
                </View>
            </View>
            <View style={styles.cardAbout}>
                    <Text style={{ fontSize: 25, fontStyle: 'italic', fontWeight: 'bold', color:'#CA352B'}}>About Us:</Text>
                    <Text>ACCUSTRAIN is manufacturer of electronics weigh machine and weigh bridge product. 
                    The range covers weigh scale from 1kg capacity to weigh bridge 100 ton capacity.
                    We know that our future success depends upon the skills and commitment of our employees and as market leaders therefore, 
                    we aim to recruit the best peoples in our business.</Text>
            </View>
            <View style={styles.cardSolution}>
                    <Text style={{ fontSize: 25, fontStyle: 'italic', fontWeight: 'bold', color:'#CA352B'}}>Our Solutions:</Text>
                    <Text>* Electronics Weigh Bridge.</Text>
                    <Text>* Platform.</Text>
                    <Text>* Table-Top.</Text>
                    <Text>* Heavy duty Low Profile platform.</Text >
                    <Text>* Weigh indicator.</Text >
                    <Text>* Software solution.</Text >
                    <Text>* Load cells.</Text >
                    <Text>* Accessories.</Text >
            </View>
            <View style={styles.cardProductUse}>
                    <Text style={{ fontSize: 25, fontStyle: 'italic', fontWeight: 'bold', color:'#CA352B'}}>Our Products Use In:</Text>
                <Text>* Construction Industry</Text>
                <Text>* Agriculture and Farming</Text>
                <Text>* Chemical and pharma</Text>
                <Text>* Food and Beverages</Text >
                <Text>* Manufacturing</Text >
                <Text>* Transport and Logistics</Text >
                <Text>* Waste and Recycling</Text >
                <Text>* Mining and Aggregates</Text >
                <Text>* Post Mail and Shipping</Text >
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    cardHeading:{
        backgroundColor: '#ffe6e6',
        // borderWidth:2,
        marginVertical:7,
        marginHorizontal:10,
        borderRadius: 15,
        elevation: 15,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    heading:{
        fontSize: 64, 
        fontStyle: 'italic', 
        textAlign: 'center', 
        color: '#194B7E',
        marginVertical:10,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    imageContainer:{
        justifyContent:'space-between',
        // alignItems:'stretch',
        marginHorizontal: 10,
        marginVertical: 10,
        // borderWidth:2,
        height: '25%',
        // paddingVertical:15
        
    },
    imageRow1:{
        flexDirection:'row',
        justifyContent:'space-around',

    },
    imageRow2:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    imageSize:{
        width: 170, 
        height: 150
    },
    cardAbout:{
        backgroundColor:'white',
        //borderWidth:2,
        borderRadius:15,
        marginHorizontal:10,
        marginVertical:10,
        padding:10,  
        height: 200,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    cardSolution:{
        backgroundColor:'white',
        //borderWidth:2,
        borderRadius:15,
        marginHorizontal:10,
        marginVertical:10,
        // marginBottom:50,
        padding:10,  
        height: 240,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    cardProductUse:{
        backgroundColor:'white',
        //borderWidth:2,
        borderRadius:15,
        marginHorizontal:10,
        marginVertical:10,
        marginBottom:50,
        padding:10,  
        height: 240,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
})

export default Home