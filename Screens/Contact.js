import React, { useState } from 'react';

import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Linking, ScrollView } from 'react-native'
import { WebView } from 'react-native-webview';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import Header from '../Components/Header'

const Contact = () => {

    const iframeString = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6902.2329788324305!2d77.261992!3d30.119480000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f6c2b470f525439!2sACCUSTRAIN!5e0!3m2!1sen!2sin!4v1622782658987!5m2!1sen!2sin" width="470" height=350" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    return (
        <>
        
            <Header />
            <ScrollView style={{ flex:1,backgroundColor: '#a6a6a6' }}>
            {/* <View style={styles.container}> */}
                <View style={styles.mapContainer}>
                <WebView
                    style={{ height: 300, width: 800 }}
                    source={{
                        html: `
                        <!DOCTYPE html>
                        <html>
                            <head></head>
                            <body>
                            <div id="baseDiv">${iframeString}</div>
                            </body>
                        </html>
                    `,
                    }}
                />
            </View>
                <View style={styles.contactCard}>
                    <Text style={{ fontSize: 25, fontStyle: 'italic', fontWeight: 'bold', color: '#194B7E', margin:3}}>Contact Us:</Text>
                    <Text style={{ fontSize: 15, fontStyle: 'italic', fontWeight: 'bold', color: 'grey', margin: 3}}>Head Office - Yamunanagar</Text>
                    <View style={{flexDirection:'row',margin:2}}>
                        <MaterialIcons style={{ margin: 3 }} name="location-city" size={28} color="#194B7E" />
                        <Text style={{fontWeight:'bold',margin: 2}}>Plot No. 367, Camp Radaur Road, Yamunanagar 135001 (HARYANA)</Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 2}}>
                        <MaterialIcons style={{ margin: 3 }} name="call" size={28} color="#194B7E" />
                        <Text style={{ fontWeight: 'bold', margin: 3 }}>HelpLine: +91 8818000994</Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 2}}>
                        <MaterialIcons style={{ margin: 3 }} name="call" size={28} color="#194B7E" />
                        <Text style={{ fontWeight: 'bold', margin: 3 }}>Mobile    : +91 7027040123</Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 2}}>
                        <MaterialIcons style={{ margin: 3 }} name="call" size={28} color="#194B7E" />
                        <Text style={{ fontWeight: 'bold', margin: 3 }}>Factory   : +91 9896880370</Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 2}}>
                        <MaterialIcons style={{ margin: 3 }} name="email" size={28} color="#194B7E" />
                        <Text style={{ fontWeight: 'bold', margin: 3 }}>Email : accustrain@gmail.com</Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 2}}>
                        <MaterialCommunityIcons style={{ margin: 3 }} name="web" size={28} color="#194B7E" />
                        <TouchableOpacity onPress={() => { Linking.openURL("http://accustrain.in")}}>
                            <Text style={{ fontWeight: 'bold', margin: 3 }}>Website : www.accustrain.in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            {/* </View> */}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#a6a6a6',
        //alignItems:'stretch',
        //justifyContent:'space-around',
    },
    mapContainer:{
        //flex: 1, 
        marginVertical:15,
        alignSelf:'center',
        //height:0,
        width:'95%',
        //borderWidth:1,
        //borderRadius:50
        elevation:10
    },
    contactCard:{
        backgroundColor:'white',
        alignSelf:'center',
        height:'48%',
        width:'95%',
        borderRadius:15,
        padding:10,
        //borderWidth:5,
        //marginVertical:10
        marginBottom:10

    }
})

export default Contact