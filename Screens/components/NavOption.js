import { StyleSheet, Text, View, SafeAreaView, FlatList,Image,  TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'
import 'react-native-gesture-handler'

const data=[
    {
   "id":123,
   "title"  :"Book a Drive",
   "screen" :"MapScreen",
    "url":"https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
},
    {
        "id":457,
        "title"  :"Order Food",
        "Screen" :"FoodScreen",
        "url":"https://media.istockphoto.com/id/1295633127/photo/grilled-chicken-meat-and-fresh-vegetable-salad-of-tomato-avocado-lettuce-and-spinach-healthy.jpg?s=1024x1024&w=is&k=20&c=2HQ3drj21kzwpvGYh-YjAmPVShsv7vbnOPNEJ-lg_pQ="
    }
]

const NavOption = () => {
    const navigation = useNavigation();
  return (
    <View>
      <FlatList 
        data={data}
        keyExtractor={(item) =>item.id}
        horizontal
        renderItem={({item}) => (
            <TouchableOpacity 
            onPress={()=> navigation.navigate(item.screen)}
            style={ tw`p-2 pt-4 pl-8  pb-8 mr-4 bg-gray-200 w-40 rounded-2xl`} >
             <View>
             
               
              <Image style={[tw`mt-2`, {
                borderRadius:10
            }] } width={100} height={100} source={{
                uri: item.url
            }} />
             <Text style={tw`mt-2 text-lg font-semibold`}>
                {item.title}
              </Text>

              <Icon
              style={tw`p-2 mt-2 bg-black w-10 h-10 rounded-full`}
               name="arrowright" color="white" type="antdesign"
              />
                
             </View>
            </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default NavOption

