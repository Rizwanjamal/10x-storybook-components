import React from 'react'
import {View,StyleSheet,CheckBox,Text} from 'react-native'

function index() {
    return (
        <View style={{flexDirection:'row',marginLeft:'-40%',marginTop:'20%',marginRight:'-40%'}}>

                <CheckBox />
                <Text style={{marginLeft:10,color:'white',marginTop:-2}}>List Feature 1</Text>
        </View>
    )
}

const styles = StyleSheet.create({
//     checkbox:{
//         position: 'absolute',
// width: '124px',
// height: '124px',
// left: '10%',
// top: '10%',
// backgroundColor: '#6563FF',
// borderLeft: '50px solid transparent',
//         borderRight: '50px solid transparent',
//         borderBottom: '25px solid red',
     
       
//         borderTop: '25px solid red'
//     },
    // checkbox: {
    //     width: '100px',
    //     height: '55px',
    //     backgroundColor: 'red';
    //     position: 'relative',
    //   }
    //   #hexagon:before {
    //     content: "";
    //     position: absolute;
    //     top: -25px;
    //     left: 0;
    //     width: 0;
    //     height: 0;
    //     border-left: 50px solid transparent;
    //     border-right: 50px solid transparent;
    //     border-bottom: 25px solid red;
    //   }
    //   #hexagon:after {
    //     content: "";
    //     position: absolute;
    //     bottom: -25px;
    //     left: 0;
    //     width: 0;
    //     height: 0;
    //     border-left: 50px solid transparent;
    //     border-right: 50px solid transparent;
    //     border-top: 25px solid red;
    //   }
    
})

export default index
