import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getData } from '../Utils/axios';

const Country = ({navigation}) => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        getUserDetails()
    }, [])


    const getUserDetails = async () => {
        const user = await getData('all');
        setCountry(user);
    }
    return (
        <View>

            <FlatList
                data={country}
                renderItem={(({ item }) => (
                    <TouchableOpacity style={{ flexDirection: 'row' , margin:15 }} onPress={()=>{navigation.navigate('CountryDetails',{ countrydata :item})}}>
                        <Image
                            style={{ height: 60, width: 100 }}
                            source={{
                                uri: item.flags.png
                            }}
                        />
                        <View style={{ width:'30%', justifyContent:'center', alignItems:'center'}}>
                        <Text>{item.name.common}</Text>
                        </View>

                    </TouchableOpacity>
                ))}
            />
        </View>
    )
}

export default Country

const styles = StyleSheet.create({})