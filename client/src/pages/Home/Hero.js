import React from 'react'
import { StyleSheet, Animated, Text, View } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";

export default function Hero() {
    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

    return (
        <View>
            <View style={{marginBottom: 10}}>
                <Text style={{fontSize: 35, fontWeight: 'bold'}}>Hello Hans!</Text>
                <Text style = {{color: "#b6b6cb", marginBottom: 20}}>Welcome to yout Task Manager</Text>
            </View>

            <AnimatedLinearGradient
                colors={["#f075b1", "#e22480"]}
                style={styles.home}
            >
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 2}}>
                        <Text
                            style={{
                                fontSize: 25,
                                fontWeight: 'bold',
                                color: '#fad8e8'
                            }}>Today's Progress summary
                        </Text>
                        <Text
                            style={{
                                marginTop: 10,
                                color: '#f08bbc'
                            }}>1 of 5 Completed
                        </Text>
                    </View>

                        {/* display progres bar */}
                    <View style={styles.progress}>
                        <Text
                            style={{
                                color: '#fad8e8',
                                fontWeight: 'bold',
                                fontSize: 30
                            }}>20%
                        </Text>
                    </View>
                </View>
            </AnimatedLinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        height: 200,
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: 'grey',
        borderRadius: 30,
        justifyContent: 'center',
    },
    progress: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
