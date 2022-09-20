import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import React from 'react';

const CountryDetails = ({ route }) => {
    const countryDetails = route.params.countrydata;
    return (
        <ScrollView>
            <View style={{ width: '100%', alignItems: 'center', paddingTop: 20 }}>
                <Image
                    style={{ height: 60, width: 100 }}
                    source={{
                        uri: countryDetails.flags.png
                    }}
                />
            </View>
            <View style={{paddingTop:15}}>
                <Text style={{ textAlign: 'center', fontSize: 17, padding: 10,backgroundColor:"#c4c4c4" }}>
                    The country name is <Text style={{color:"#0c5305"}}>{countryDetails.name.common}</Text>. The capital of {countryDetails.name.common} is <Text style={{color:"#0c5305"}}>{countryDetails.capital}</Text>. The area of this country is {countryDetails.area}
                </Text>
            </View>
        </ScrollView>
    )
}

export default CountryDetails

const styles = StyleSheet.create({})