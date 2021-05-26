import React, { useState } from 'react';

import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'

import Header from '../Components/Header'

const Home = () => {
    return (
        <ScrollView style={{ backgroundColor:'#ffcccc'}}>
        <Header />
            <Text style={styles.heading}>Accustrain</Text>
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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    heading:{
        fontSize: 64, 
        fontStyle: 'italic', 
        textAlign: 'center', 
        color: '#194B7E',
        marginVertical:10
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