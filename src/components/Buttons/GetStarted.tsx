import React from 'react'
import {View,StyleSheet} from 'react-native'

function GetStarted() {
    return (
        <View style={styles.btnOuter}>
            <View style={styles.btnInner}>
                Get Started
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    btnOuter:{
        display: 'flex',
        flexDirection: 'row',
        padding: '8px 24px',
        
       
        width: '128px',
        height: '44px',
      
        
        backgroundColor: '#6563FF',
        border: '1px solid #6563FF',
        borderRadius: 2,
        cursor:'pointer'
    },
    btnInner: {
        position: 'absolute',
        width: '104px',
        height: '24px',
       left:'10%',
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '24px',
        textAlign: 'center',
        color: '#FFFFFF',
        flex: 0,
        order: 0,
        alignSelf: 'center',
        margin: '10px 0px'
    }
})
export default GetStarted
