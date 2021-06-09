import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native'

const ImageCard = ( {src,model} ) => {
    //alert(src)
    //let path = require('../assets/images/4.jpg')
    return (
                <View style={styles.imageCard}>
                    <Image
                        source={src}
                        //source={{uri:path}}
                        style={styles.imageSize}
                    />
                    <Text style={styles.productModel}>{model}</Text>
                </View>
    );
}

const styles = StyleSheet.create({
    imageCard: {
        flex: 1,
        backgroundColor: 'white',
        alignSelf: 'center',
        height: 320,
        width: '95%',
        borderRadius: 15,
        marginVertical: 10,
        // paddingHorizontal:10,
        paddingTop: 10
    },
    imageSize: {
        alignSelf: 'center',
        width: '98%',
        height: 270
    },
    productModel: {
        alignSelf: 'center',
        paddingHorizontal: 10,
        marginBottom:5,
        marginTop:5,
        fontWeight: 'bold',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#194B7E',
        fontSize: 17,
        color: '#194B7E',
    }
})

export default ImageCard