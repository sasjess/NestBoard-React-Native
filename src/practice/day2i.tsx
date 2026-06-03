/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image , StyleSheet } from 'react-native'
import React from 'react'

export const D2i = () => {
    return(
        <View style = {styles.container}>
            <Image
                source = {require('./../assets/images/car.jpeg')}
                resizeMode='cover'
                style={
                {
                    width: 300,
                    height: 300,
                    
            }
        }/>
        
        <Text style = {styles.displayText}>CarPoolin</Text>
        <Text>Drive & Save Money</Text>
        
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 100
    },
    displayText: {
        fontWeight: '600',
        fontSize: 35,
        
        
    }
})