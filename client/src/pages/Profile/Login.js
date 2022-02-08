import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Login(navigation) {
    const [email, setEmail] = useState('');
    const [emailValidError, setEmailValidError] = useState('');

    console.log(navigation.navigation)

    const handleValidEmail = val => {

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (val.length === 0) {
            setEmailValidError('email address must be enter');
        } else if (reg.test(val) === false) {
            setEmailValidError('enter valid email address');
        } else if (reg.test(val) === true) {
            setEmailValidError('');
        }
    };

    console.log(emailValidError)
    return (
        <View style={{flex: 1, justifyContent: 'center'}}>

            <View style={{
                marginVertical: 20,
                marginHorizontal: 30,
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                <View style={{ alignItems: "center", marginBottom: 20 }}>
                    <Text style={styles.title}>Login</Text>
                </View>

                <Input
                    placeholder="Email"
                    value={email}
                    onChangeText={value => {
                        setEmail(value);
                        handleValidEmail(value);
                    }}
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

                <View styles={{ alignItems: 'center', marginTop: 20 }}>
                    <Button
                        title="Log in"
                        loading={false}
                        loadingProps={{ size: 'small', color: 'white' }}
                        buttonStyle={{
                            backgroundColor: '#e22480',
                            borderRadius: 30,
                            width: '100%',
                        }}
                        titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                        containerStyle={{
                            // marginHorizontal: 50,
                            height: 50,
                        // marginVertical: 10,
                        }}
                        // onPress={() => console.log('aye')}
                        />
                </View>

            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <View style={{justifyContent: 'center'}}>
                    <Text>Dont have account ? </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                        <Button
                            title="sign up"
                            loading={false}
                            buttonStyle={{
                                backgroundColor: 'transparant',
                            }}
                            titleStyle={{
                                color: 'blue'
                            }}
                            onPress={() => navigation.navigation.navigate('Register')}
                        />
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


