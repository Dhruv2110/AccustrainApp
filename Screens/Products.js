import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native'

import Header from '../Components/Header'
import ImageCard from '../Components/ImageCard'

const Products = () => {

    const list = [
        {
            id:1,
            src: require('../assets/products/ASP-367_MS_Weighing_Indicator.jpg'),
            model:'ASP-367 MS Weighing Indicator'
        },
        {
            id:2,
            src: require('../assets/products/AST-236_Lucas.jpg'),
            model:'AST-236 Lucas'
        },
        {
            id:3,
            src: require('../assets/products/AST-236_BM.jpg'),
            model:'AST-236 BM'
        },
        {
            id:4,
            src: require('../assets/products/AST-236_ABS_TABLETOP.jpg'),
            model:'AST-236 ABS TABLETOP'
        },
        {
            id:5,
            src: require('../assets/products/ASP-367_RP_PLATFORM.jpg'),
            model:'ASP-367 RP PLATFORM'
        },
        {
            id:6,
            src: require('../assets/products/ASP-367_Heavy_Duty_Platform_Scale.jpg'),
            model:'ASP-367 Heavy Duty Platform Scale'
        },
        {
            id:7,
            src: require('../assets/products/ASP-367_RB_Platform_Scale.jpg'),
            model:'ASP-367 RB Platform Scale'
        },
        {
            id:8,
            src: require('../assets/products/ASP-367_Chicken_Weighing_Scale.jpg'),
            model:'ASP-367 Chicken weighing scale'
        },
        {
            id:9,
            src: require('../assets/products/AST-236_Jewellery.jpg'),
            model:'AST-236 Laboratory/Jewellery Scale'
        },
        {
            id:10,
            src: require('../assets/products/AST-236_PRC_TABLETOP.jpg'),
            model:'AST-236 PRC TABLETOP'
        },
        {
            id:11,
            src: require('../assets/products/ASP-367_SP_4LC_Roller_Platform_Scale.jpg'),
            model:'ASP-367 SP 4 LC Roller Platform Scale'
        },
        {
            id:12,
            src: require('../assets/products/ASP-367_Adult_Weighing_Scale.jpg'),
            model:'ASP-367 Adult Weighing Scale'
        },
        {
            id:13,
            src: require('../assets/products/AST-239_MS_Tabletop.jpg'),
            model:'AST-239 MS Tabletop'
        },
        {
            id:14,
            src: require('../assets/products/AST-236_ABS_Mini_Tabletop.jpg'),
            model:'AST-236 ABS Mini Tabletop'
        },
        {
            id:15,
            src: require('../assets/products/AST-236_Mini_Counter_Scale.jpg'),
            model:'AST-236 Mini Counter Scale'
        },
        {
            id:16,
            src: require('../assets/products/Tank_Weighing_System.jpg'),
            model:'Tank Weighing System'
        },
        {
            id:17,
            src: require('../assets/products/ASP-367_Big_Platform_Scale_4_LC.jpg'),
            model:'ASP-367 Big Platform Scale 4 LC'
        },
    ]

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.cardHeading}>
                <Text style={styles.heading}>Our Products</Text>
            </View>
            {/* <ScrollView>
                <ImageCard/>          
            </ScrollView> */}
            <FlatList
                data={list}
                renderItem={({ item }) => <ImageCard src={item.src} model={item.model} />}
                keyExtractor={item => item.id.toString()}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a6a6a6',
    },
    cardHeading: {
        backgroundColor: '#ffffff',
        // borderWidth:2,
        marginVertical: 0,
        marginHorizontal: 10,
        marginTop:5,
        borderRadius: 10,
        elevation: 15,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    heading: {
        fontFamily: 'OpenSans',
        fontSize: 32,
        fontWeight:'bold',
        // fontStyle: 'italic',
        textAlign: 'center',
        color: '#194B7E',
        marginVertical: 0,
        elevation: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
})

export default Products