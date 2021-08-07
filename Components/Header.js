import React, { useState } from 'react';

import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'

const Header = () => {
    return (
        <View style={styles.head}>
            <Image
                source={require('../assets/logo.png')}
                style={{ width: 60, height: 50 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    head: {
        width: '100%',
        height: 85,
        paddingTop: 40,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }
});

export default Header