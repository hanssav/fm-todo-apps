import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Details({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.navigate('Details')}
            />
        </View>

    )
}

const styles = StyleSheet.create({})
