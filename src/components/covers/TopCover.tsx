import React from 'react'
import {View,StyleSheet,Image} from 'react-native'


import MiddleCover from './MiddleCover'
import LowerMiddle from './LowerMiddle'
import ImageWithText from '../Image/index'

function TopCover() {
    return (
        <View style={{position:'relative'}}>
            <View style={styles.top}>
                
                {/* <ImageWithText /> */}
                <MiddleCover />
            </View>
            <View style={styles.bottom}>
                <LowerMiddle />
            </View>
            {/* <Stars />
            <MiddleCover />
            <LowerMiddle /> */}
        </View>
    )
}

const styles = StyleSheet.create({
   
    top:{
        backgroundColor: '#6563FF',
        width:'100%',
        height:'90vh'
    },
    bottom:{
        backgroundColor: '#040215',
        width:'100%',
        height:'100vh'
    },
    image:{
        position:'absolute',
        backgroundColor:'white',
       
     
        height:'200px'

    }
})

export default TopCover
