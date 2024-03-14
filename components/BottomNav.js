import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const BottomNav = ({tabs,isSelected,height,bg}) => {
  return (
    <View style={{flex:1,bottom:0,position:"absolute",backgroundColor:"gray",height:height?height:80,width:"100%",borderTopRightRadius:10,borderTopLeftRadius:10,padding:4}}>
     <FlatList scrollEnabled={false} horizontal data={tabs} renderItem={({item})=>{
        return(<TouchableOpacity style={{width:Dimensions.get("window").width/tabs.length}}>
             <View>
                <Image src={item.icon!=null?item.icon:"https://unsplash.com/photos/a-close-up-of-a-persons-neck-with-a-red-light-m8j252EC0YE"}  width={item.width?item.width:80} height={height?height:80}></Image>
                <Text>{item.title}</Text>
             </View>
            </TouchableOpacity>)
     }}></FlatList>
    </View>
  )
}

export default BottomNav

const styles = StyleSheet.create({})