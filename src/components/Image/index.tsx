import React from 'react'
import {Image,View,StyleSheet} from 'react-native'

function index() {
    return (
        <View style={{margin:'20px auto'}}>
            <Image source={require('../../assets/images/stars.png')} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
      
width: '45%',
height: '160px',



fontFamily: 'SF Pro Display',
fontStyle: 'normal',
fontWeight: 'bold',
fontSize: '50px',
lineHeight: '72px',
/* or 112% */

textAlign: 'center',

color: '#000',


    }
})

export default index
