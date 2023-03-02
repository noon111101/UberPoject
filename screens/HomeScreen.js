import { StyleSheet, Text, View , SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env"
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
        style={{
          width:100,
          height:100,
          resizeMode:"contain"
        }}
        source={{
          uri:"https://1000logos.net/wp-content/uploads/2017/09/Uber-logo.jpg"
        }}
        > 
        </Image>
        <GooglePlacesAutocomplete
          placeholder='Where from'
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18
            }
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text : {
        color : "blue"
    }
})