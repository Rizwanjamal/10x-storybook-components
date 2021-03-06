

import React, { useState } from "react"
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'

// import { text, number } from "@storybook/addon-knobs";
export interface IProps {
    onStart?: string,
    onToggle?:string,
    innerColor?: string
}



export default (props:IProps) => {

    const [isToggle, setIsToggle] = useState(false)
    const styles = StyleSheet.create({

        outerView: {
            // position: "absolute",
            width: "44px",
            height: "24px",
            // left: "45%",
            // top: "6%",
            backgroundColor: `${props.onStart || '#6563FF' }`,
            borderRadius: 12,
            cursor:'pointer'
        },
        innerView: {
            // position: "absolute",
            marginTop:'5%',
            marginLeft:'2%',
            width: "20px",
            height: "20px",
            // left: "5%",
            // top: "11%",
            backgroundColor: `${props.innerColor || 'white'}`,
            borderRadius: 12,
            cursor:'pointer'
        },
        outerViewActive: {
            // position: "absolute",
            width: "44px",
            height: "24px",
            // left: "45%",
            // top: "6%",
            backgroundColor: `${props.onToggle || 'blue'}`,
            borderRadius: 12,
            cursor:'pointer'
    
        },
        innerViewActive: {
            // position: "absolute",
            marginTop:'5%',
            marginLeft:'52%',
          
            width: "20px",
            height: "20px",
            // left: "5%",
            // top: "11%",
           
            backgroundColor: `${props.innerColor || 'white'}`,
            borderRadius: 12,
            cursor:'pointer'
        }
    
    })
    return <TouchableWithoutFeedback onPress={() => {
        setIsToggle(!isToggle)
        
    }
    }>

        <View style={!isToggle ? styles.outerView : styles.outerViewActive}>
            <View style={!isToggle ?  styles.innerView:styles.innerViewActive}>

            </View>

        </View>
    </TouchableWithoutFeedback>

    
}
