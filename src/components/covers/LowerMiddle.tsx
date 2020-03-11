import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Checkbox from '../CheckBox'
import GetStarted from '../Buttons/GetStarted'
import { createStyles, maxWidth } from 'react-native-media-queries';

function LowerMiddle() {
    return (
        <View style={styles.cover}>
            <View style={{
                alignItems: 'center',
                marginTop: 25

            }}>
                <Text style={{
                    color: '#FFF',
                    fontSize: 20,
                }}>Features Included</Text>
            </View>

            <View style={styles.mainBox}>
                <View style={styles.left}>
                    <View style={styles.mainView}>
                        <View style={styles.innerView1}>
                            <Checkbox />
                        </View>
                    </View>
                    <View style={styles.mainView}>
                        <View style={styles.innerView1}>
                            <Checkbox />
                        </View>
                    </View>
                    <View style={styles.mainView}>
                        <View style={styles.innerView1}>
                            <Checkbox />
                        </View>
                    </View>
                    <View style={styles.mainView}>
                        <View style={styles.innerView1}>
                            <Checkbox />
                        </View>
                    </View>
                </View>
                <View style={styles.right}>
                    <View style={styles.mainView}>
                        <View style={styles.innerView2}>
                            <Checkbox />
                        </View>
                    </View>
                    <View style={styles.mainView}>
                        <View style={styles.innerView2}>
                            <Checkbox />
                        </View>
                    </View>
                    <View style={styles.mainView}>
                        <View style={styles.innerView2}>
                            <Checkbox />
                        </View>
                    </View>
                    <View style={styles.mainView}>
                        <View style={styles.innerView2}>
                            <Checkbox />
                        </View>
                    </View>

                </View>
                    <View style={styles.mainView}>
                        <View style={styles.innerBtn}>
                            <GetStarted />
                        </View>
                    </View>

            </View>





        </View>


    )
}

const styles = StyleSheet.create({
    cover: {
        position: 'absolute',
        width: '60%',
        minHeight: '50%',
        left: '20%',
        top: '-7%',

        backgroundColor: '#14142C',

        borderBottomLeftRadius: 15,
        borderBottomEndRadius: 15
    },
    mainBox: {
        width: '100%',
    
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '10%',
        marginBottom:'20%',
        flexDirection: 'row',
        flexWrap: 'wrap',

        // justifyContent: 'space-evenly',
        justifyContent:'center',
        alignItems: 'center',
      
    },
    mainView: {
        width: '100%',
        height: '25%',


    },
    innerView1: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px'


    },
    innerView2: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px'


    },
    innerBtn:{
        flex: 1,
        height: '100%',
        // justifyContent: 'flex-start',
        // alignItems:'flex-start'
        // marginLeft:'-40%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'30px'

    },
    left: {
        width: '190px',
        height: '90%',

    },
    right: {
        width: '190px',
        height: '90%',

    },

})

export default LowerMiddle
