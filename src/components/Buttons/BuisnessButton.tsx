import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function BuisnessButton() {
    return (
        <View style={styles.btnOuter}>
            <View style={styles.btnInner}>
                Small Buisness
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    btnOuter: {
        display: 'flex',
        flexDirection: 'row',
        padding: '4px 8px',

        position: 'absolute',
        width: '120px',
        height: '32px',
        left: '25%',
        top: '5%',

        backgroundColor: 'rgba(101, 99, 255, 0.1)',
        borderRadius: 4,
    
    }
    , btnInner: {
        position: 'absolute',
        width: '104px',
        height: '24px',
        left: '4%',
        top: '4px',
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '24px',
        textAlign: 'right',
        color: '#6563FF',
        flex: 0,
        order: 0,
        alignSelf: 'center',
        margin: '10px 0px'
    }
})

export default BuisnessButton
