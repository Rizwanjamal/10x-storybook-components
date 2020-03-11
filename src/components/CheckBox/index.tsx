import React,{useState} from 'react'
import {View,StyleSheet,CheckBox,Text,Image,TouchableWithoutFeedback} from 'react-native'


function Checkbox() {
    const [checked,setChecked] = useState(false);
    return (
        // <View >
        <View style={{flexDirection:'row',}}>
              <TouchableWithoutFeedback style={{backgroundColor:'green',height:'200'}} onPressIn={() => {
                  setChecked(!checked);
              
              }}>
                
                <View style={{width:'3%'}}>


                  <Image source={checked ? require('../../assets/images/polygonRight.png') : require('../../assets/images/Polygon.png')} style={styles.image}/>
                 
                </View>
              </TouchableWithoutFeedback>
                  
               
                <Text style={{marginLeft:25,color:'white',marginTop:2}}>List Feature 1</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width:22,
        height:24
    }
})

export default Checkbox
