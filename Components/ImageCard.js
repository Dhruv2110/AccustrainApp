import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native'

const ImageCard = ( {src,model} ) => {
    //alert(src)
    //let path = require('../assets/images/4.jpg')
    
    const whatsapp = () => {
        let msg = 'Hi, i am interested in this model : ';
        if (msg) {
            let url = "whatsapp://send?text=" + msg + model + "&phone=918818000994";
            Linking.openURL(url)
        } else {
            alert("Please enter message to send");
        }
    }

    return (
                <View style={styles.imageCard}>
            <Text style={styles.productModel}>{model}</Text>
                    <Image
                        source={src}
                        //source={{uri:path}}
                        style={styles.imageSize}
                    />
            <TouchableOpacity
                style={styles.button}
                onPress={whatsapp}
            >
                <Text style={{color:'white',fontSize:21,alignSelf:'center'}}>Enquire Now</Text>
            </TouchableOpacity>
                </View>
    );
}

const styles = StyleSheet.create({
    imageCard: {
        flex: 1,
        backgroundColor: 'white',
        alignSelf: 'center',
        height: 350,
        width: '95%',
        borderRadius: 15,
        marginVertical: 10,
        // paddingHorizontal:10,
        paddingTop: 10
    },
    imageSize: {
        alignSelf: 'center',
        width: '98%',
        height: 250
    },
    productModel: {
        alignSelf: 'center',
        paddingHorizontal: 10,
        marginBottom:5,
        marginTop:5,
        fontWeight: 'bold',
        borderWidth: 1,
        borderRadius: 7,
        borderColor: '#194B7E',
        fontSize: 17,
        color: '#194B7E',
    },
    button: {
        backgroundColor: '#194B7E',
        alignSelf:'center',
        width:170,
        height:35,
        borderRadius:7,
        marginBottom:0,
        marginTop:10,
        elevation:10
    }
})

export default ImageCard