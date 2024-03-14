"use client"
import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const CustomTextInput = ({
    placeholder,length,color,placeholdercolor,size,onchangeText,value,isBad,keyboardType,bg,borderColor,width,height ,borderRadius,title,fontSize,borderWidth
}) => {

const [change,setchange]=useState("");
console.log(change);
isBad=true
if (change.length>0) {
     isBad=false
}

  return (
    <View style={{width:width?width:200,height:height?height:50,backgroundColor:bg?bg:"white",justifyContent:"center",padding:2,borderRadius:borderRadius?borderRadius:10,alignItems:"center",}}>
      <TextInput onChangeText={(text)=>{
          setchange(text);
      }}  style={{borderWidth:borderWidth?borderWidth:2,width:width?width:200,height:height?height:40,borderColor: isBad?"red":(borderColor?borderColor:"black"),borderRadius:borderRadius?borderRadius:2}} placeholder={placeholder?placeholder:"Enter here"}></TextInput>
      {
        isBad?<Text style={{color:"red",justifyContent:"flex-start",textAlign:"left",alignSelf:"flex-start"}}>Plese Enter name</Text>:null
      }
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({})