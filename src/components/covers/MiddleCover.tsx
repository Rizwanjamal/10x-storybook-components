import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import BuisnessButton from '../Buttons/BuisnessButton'
import Toggle from '../Buttons/ToggleButton'


function MiddleCover() {
    return (
        <View style={styles.cover}>

            <View style={{ flexDirection: 'row', width: '100%', height: '20%', alignItems: "stretch", justifyContent: 'center' }}>
                <View style={{ width: '40%', justifyContent: 'center' }}>
                    <View style={{ alignSelf: 'flex-end' }}>

                        <BuisnessButton />
                    </View>
                </View>
                <View style={{ width: '10%', justifyContent: 'center', marginLeft: '2%', marginRight: '2%' }}>
                    <View style={{ alignSelf: 'center' }}>

                        <Toggle />
                    </View>
                </View>
                <View style={{ width: '37%', justifyContent: 'center', marginRight: '5%' }}>
                    <Text style={{ color: 'white',fontSize:'85%' }}>Large Company</Text>
                </View>

            </View>
            <View style={{
                width: '100%',
                height: '20%',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={styles.plan}> Plan Price </Text>
            </View>
            <View style={{

                width: '100%',
                height: '30%',

                flexDirection: 'row'

            }}>
               

                
                <View style={{flexDirection:'row', width: '100%', height: '100%', justifyContent: 'center' }}>
                    <View style={{ alignItems: 'center' }}>

                        <Text style={styles.price}> $150 </Text>
                    </View>
                        <Text style={styles.month}>/month</Text>

                </View>
                {/* <View style={{ width: '40%', height: '100%', justifyContent: 'center' }}>
                    <View>
                        <Text style=>/month</Text>
                    </View>
                </View> */}
                </View>

                {/* 
                 */}
           
        </View>
    )
}

const styles = StyleSheet.create({
    cover: {

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
        // position: 'absolute',
        // left: '55%',
        // top: '6%',
        color: 'white'
    },
    plan: {
        fontSize: 33,
        fontWeight: '500',
        textAlign: 'center',

        color: '#FFFFFF'
    },
    price: {
        fontSize: '400%',
        fontWeight: 'bold',


        color: '#FFFFFF'
    },
    month: {

        fontSize: 20,
        color: 'white',
        marginTop: 40,
        marginLeft: -10
    }
})

export default MiddleCover
