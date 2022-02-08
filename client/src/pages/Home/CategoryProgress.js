import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CategoryProgress(props) {
    return (
        <View>
            <View style={styles.category}>
                <Text style={{color:'#cdcddb'}}>{props.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    category: {
        flexDirection: 'row',
        marginTop: 10,
        marginRight: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#cdcddb',
        // backgroundColor: ,
        justifyContent: 'center'
    }
})
