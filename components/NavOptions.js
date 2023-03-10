import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { Icon } from '@rneui/themed';
import tw from 'twrnc';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const NavOptions = () => {
    const navigation = useNavigation();
    const data = [
        {
            id: 1,
            name: 'Go for a ride',
            screen: 'MapScreen',
            image : 'https://assets.grab.com/wp-content/uploads/sites/11/2019/08/01200400/Mother_Car.png',
        },
        {
            id: 2,
            name: 'Order food',
            screen : 'EatScreen',
            image : 'https://assets.grab.com/wp-content/uploads/sites/11/2021/07/29135322/RM1190-Website-v4-10.png',
        }
    ]
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                style={tw`p-2 pl-6 pb-8 pt-4 bg-green-200 m-2 w-40 rounded-lg`}
                onPress={()=> navigation.navigate(item.screen)}
                >
                    <View>
                        <Image
                        style={{width:120,height:120,resizeMode:'contain'}}
                        source={{uri : item.image}}
                        />
                    </View>
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.name}</Text>
                    <Icon style={tw`bg-white rounded-full w-10 mt-4 p-2 font-semibold`} name="arrowright" color="green" type="antdesign"/>    
                </TouchableOpacity>

            )}
        ></FlatList>
    )
};
export default NavOptions;
