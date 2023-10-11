import React from 'react'
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOption from './components/NavOption'

const HomeScreen =()=>{
    return (
   
          <SafeAreaView style={tw`bg-white h-full`}>
           <View style={tw`p-4`}>
            <Image style={[tw`ml-2` ,{
                borderRadius:10
            }]} width={100} height={100} source={{
               uri: "https://i0.wp.com/goworkship.com/magazine/app/uploads/2018/09/Uber_Logo_Black.png?w=1920&ssl=1"
            }} />

            <NavOption/>
           </View>
          </SafeAreaView>

    )
}

export default HomeScreen;
