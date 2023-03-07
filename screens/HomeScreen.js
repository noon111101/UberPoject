import { StyleSheet, Text, View , SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_KEY} from "@env"
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
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
          styles={{
            container: {
              flex: 0
            },
            textInput: {
              fontSize: 18
            }
          }}
          onPress={(data , detail = null) => {
            dispatch(setOrigin({
              location: detail.geometry.location,
              description : data.description
            }));
            dispatch(setDestination(null));
            console.log(detail)
          }}
          onFail={error => console.error(error)}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_KEY,
            language: 'en'
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
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