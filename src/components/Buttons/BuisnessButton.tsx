import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'

function BuisnessButton() {
    return (
        <TouchableOpacity>

        <View style={styles.btnOuter}>
            <View style={styles.btnInner}>
                Small Buisness
            </View>
        </View>
        </TouchableOpacity>


    )
}

const styles = StyleSheet.create({
    btnOuter: {
        // display: 'flex',
        // flexDirection: 'row',
        // flex:2,
      
      
        // position: 'absolute',
        width: '115px',
        height: '32px',
        // left: '25%',
        // top: '5%',

        backgroundColor: 'rgba(101, 99, 255, 0.1)',
        borderRadius: 4,
       
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '95%',
        lineHeight: '24px',
        textAlign: 'center',
        color: '#6563FF',
       
      
        alignSelf: 'center',
        margin: '10px 0px',
        cursor:'pointer'
    },
    btnInner:{
        padding:'2px'
    }
    
})

export default BuisnessButton
