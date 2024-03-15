"use client"
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const CustomWelcome = ({screens,activeDotColor,nonActiveDotColor,bgcolor,btnBgcolor,color,titleColor,descColor}) => {
    const [sIndex,setIndex]=useState();
  return (
    <View >
      <View style={{flex:2}}>
        <FlatList
           showsHorizontalScrollIndicator={false}
          horizontal 
          onScroll={(e)=>{
            setIndex(Math.floor(e.nativeEvent.contentOffset.x/(Dimensions.get("window").width.toFixed(0))));
      
          }}
          data={screens}
          pagingEnabled
           renderItem={({item})=>{
             return (<View style={{width:Dimensions.get("window").width,alignItems:"center"}}>
             <Image source={item.image}   style={{width:"100%",height:"70%"}} />
             <Text>{item.title}</Text>
             <Text>{item.desc}</Text>
            </View>)
           }}
        />       
      </View>
      <View style={{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row",gap:20}}> 
       {
        screens.map((item,index)=>{
            return(
                <View key={index} style={{backgroundColor:sIndex==index?activeDotColor?activeDotColor:"black":nonActiveDotColor?nonActiveDotColor:"gray",height:30,width:30,borderRadius:15}}>
                   <Text>{index}</Text>
                </View>
            )
        })
       }
      </View>
    </View>
  )
}

export default CustomWelcome

const styles = StyleSheet.create({})