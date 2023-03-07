import { Text, TouchableOpacity, View } from 'react-native'
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
            screen: 'MapScreen'
        },
        {
            id: 2,
            name: 'Order food',
            screen : 'EatScreen'
        }
    ]
    return (
        <FlatList
            data={data}
            
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                onPress={()=> navigation.navigate(item.screen)}
                >
                    <Text
                        style={{
                            backgroundColor: "red", marginTop: 12, borderStyle: "solid",
                            borderRadius: 10, textAlign: "center",
                            fontSize: 20
                        }}
                        >
                        {item.name}</Text>
                        <Icon name="caretright" color="black" type="antdesign"/>
                </TouchableOpacity>

            )}
        ></FlatList>
    )
};
export default NavOptions;
