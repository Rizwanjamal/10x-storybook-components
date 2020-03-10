import React, { Component } from 'react'
import { View } from 'react-native'
import {Slider} from 'react-native'

class Range extends Component {
    render() {

        return (
            <>
                <Slider
                    style={{ width: 200, height: 60 }}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#000000"
                    maximumTrackTintColor="#FFFFFF"
                    thumbTintColor="#FFFFFF"
                />

            </>
        )
    }
}

export default Range
