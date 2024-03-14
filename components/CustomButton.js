import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({
    placeholder,length,color,placeholdercolor,size,onchangeText,value,isBad,keyboardType,bg,borderColor,width,height ,borderRadius,title,fontSize
}) => {
  return (
    <View style={{width:width?width:200,height:height?height:50,backgroundColor:bg?bg:"black",justifyContent:"center",padding:2,borderRadius:borderRadius?borderRadius:10,alignItems:"center",}}>
      <TouchableOpacity style={{}}>
      <Text style={{color:color?color:"white",fontSize:fontSize?fontSize:20}}>{title?title:"Button"}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustomButton;

const styles = StyleSheet.create({})