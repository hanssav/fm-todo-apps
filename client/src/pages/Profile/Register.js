import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Register(navigation) {
    return (
        <View style={{flex: 1, justifyContent: 'center' }}>

            <View style={{
                marginVertical: 20,
                marginHorizontal: 30,
                alignItems: 'center',
                justifyContent: 'center',

            }}>

                <View style={{ alignItems: "center", marginBottom: 20 }}>
                    <Text style={styles.title}>Register</Text>
                </View>

                <Input
                    placeholder= "Full Name"
                    leftIcon={
                        <MaterialCommunityIcons name="account" size={20}/>
                    }
                />

                <Input
                    placeholder= "Email"
                    leftIcon={
                        <MaterialCommunityIcons name="account" size={20}/>
                    }
                />

                <Input
                    placeholder="Password"
                    secureTextEntry={true}
                    leftIcon={
                        <MaterialCommunityIcons name="key" size={20}/>
                    }
                />


            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>

                <View styles={{ alignItems: 'center', flex: 1}}>
                    <Button
                        title="Sign Up"
                        loading={false}
                        loadingProps={{ size: 'small', color: 'white' }}
                        buttonStyle={{
                            backgroundColor: '#e22480',
                            borderRadius: 30,
                            width: 320,
                        }}
                        titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                        containerStyle={{
                            // marginHorizontal: 50,
                            height: 50,
                        // marginVertical: 10,
                        }}
                        onPress={() => console.log('aye')}
                        />
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <View style={{justifyContent: 'center'}}>
                        <Text>Already have an account ? </Text>
                    </View>
                    <View style= {{alignItems: 'center'}}>
                        <Button
                            title="Login"
                            loading={false}
                            buttonStyle={{
                                backgroundColor: 'transparant',
                            }}
                            titleStyle={{
                                color: 'blue'
                            }}
                            onPress={() => navigation.navigation.navigate('Login')}

                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "700",
    }
})
