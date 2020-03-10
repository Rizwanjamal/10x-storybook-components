import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import BuisnessButton from '../Buttons/BuisnessButton'
import Toggle from '../Buttons/ToggleButton'


function MiddleCover() {
    return (
        <View style={styles.cover}>
          

            <BuisnessButton />
            <Toggle />
            <Text style={styles.txt}>Large Company</Text>
            <View style={{
                position: 'absolute',
                width: '30%',
                height: '48px',
                left: '33%',
                top: '25%'
            }}>
            
                <Text style={styles.plan}> Plan Price </Text>
            </View>
            <View style={{
                position: 'absolute',
                width: '30%',
                height: '48px',
                left: '28%',
                top: '48%'
            }}>
                <Text style={styles.price}> $150 </Text>
                <Text style={styles.month}>/month</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cover: {
        flexDirection: 'row',
        position: 'absolute',
        width: '60%',
        height: '65%',
        left: '20%',
        top: '30%',

        backgroundColor: '#040215',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.25)',
        borderRadius: 15
    },
    txt: {
        position: 'absolute',
        left: '55%',
        top: '6%',
        color: 'white'
    },
    plan: {
        fontSize: 33,
        fontWeight: '500',
        textAlign: 'center',

        color: '#FFFFFF'
    },
    price:{
        fontSize: 64,
      fontWeight:'bold',
        textAlign: 'center',

        color: '#FFFFFF'
    },
    month:{
        position:'absolute',
        left:'85%',
        top:'90%',
        fontSize:20,
        color:'white'
    }
})

export default MiddleCover
