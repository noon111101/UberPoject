import { Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { Icon } from '@rneui/base'
import tw from 'twrnc';
import axios from 'axios';

const NavOptions = () => {
    const API_URL = 'http://10.0.4.142:8080/api/department/';

    const getDepartment = () => {
        return axios.get(API_URL);
    }
    const [department, setDepartment] = useState([])

    useEffect(() => {
        getDepartment()
            .then(res => {
                setDepartment(res.data)
                console.log(department)
            }).catch((erro) => { console.log(erro) })
    }, []);
    return (
        <FlatList
            data={department}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity>
                    <Text
                        style={{
                            backgroundColor: "red", marginTop: 12, borderStyle: "solid",
                            borderRadius: 10, textAlign: "center",
                            fontSize: 20
                        }}>
                        {item.name}</Text>
                </TouchableOpacity>

            )}
        ></FlatList>
    )
};
export default NavOptions;
