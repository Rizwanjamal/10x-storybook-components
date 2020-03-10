import React from 'react'
import { View, StyleSheet,Text } from 'react-native'
import Checkbox from '../CheckBox'
import GetStarted from '../Buttons/GetStarted'

function LowerMiddle() {
    return (
        <View style={styles.cover}>
            <View style={{position:'absolute',left:'33%',top:'12%'}}>
                <Text style={{color:'white',textAlign:'center',fontSize:20}}>Features Included</Text>
               

               
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>

                <Checkbox />
                <Checkbox />
               
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>

                <Checkbox />
               

                <Checkbox />
               
               
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>

                <Checkbox />
                <Checkbox />
               
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>

                <Checkbox />
                <Checkbox />
               
                </View>
              

               <GetStarted />
              
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cover: {
        position: 'absolute',
        width: '60%',
        height: '75%',
        left: '20%',
        top: '-10%',

        backgroundColor: '#14142C',
      
        borderBottomLeftRadius:15,
        borderBottomEndRadius:15
    }
})

export default LowerMiddle
