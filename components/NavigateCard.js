import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_KEY} from "@env"
import tw from 'twrnc';
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from '@react-navigation/native';

export default function NavigateCard() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
        <Text style={tw`py-2 text-center text-xl`}>Good Morning , Trieu</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
        <GooglePlacesAutocomplete
          placeholder='Bạn muốn đi từ đâu ?'
          styles={toInputBoxStyle}
          onPress={(data , detail = null) => {
            dispatch(setDestination({
              location: detail.geometry.location,
              description : data.description
            }));
            console.log(GOOGLE_MAPS_KEY)
            navigation.navigate('GetRide'); 
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
        </View>
      </View>
    </SafeAreaView>
  );
}

const toInputBoxStyle = StyleSheet.create({
    container:{
        backgroundColor:"white",
        paddingTop: 20,
        flex:0 
    },
    textInput:{
        backgroundColor:"#DDDDDF",
        borderRadius: 0,
        fontSize:18,
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0 
    },
});
