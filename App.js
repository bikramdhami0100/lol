import { View, Text } from 'react-native'
import React from 'react'
import CusstomTextInput from './components/CustomButton'
import CustomButton from './components/CustomButton'
import CustomTextInput from './components/CustomTextInput'
import BottomNav from './components/BottomNav'

const App = () => {
  return (
    <View style={{flex:1,flexDirection:"column", gap:10, justifyContent:"center",alignItems:"center",color:"black",backgroundColor:"white"}} >

     {/* <CustomTextInput isBad={true} borderColor={"blue"}  placeholder="enter your name " borderRadius={10}/>
     <CustomButton width={100} height={40} fontSize={15}/> */}
     <BottomNav tabs={[
      {icon:null,title:"Home",size:20,fontSize:15},
      {icon:null,title:"Search",size:20,fontSize:15},
      {icon:null,title:"Setting",size:20,fontSize:15},
      
    ]} /> 
    </View>
  )
}

export default App