import React, {Component, useState} from 'react'
import { useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, FlatList, RefreshControl} from 'react-native'
import { CheckBox } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { API } from '../../config/api';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function CardTask(props) {
    console.log(props)
    const [check, setCheck] = useState(false)
    const [tasks, setTasks] = useState([])
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <View key={props.id}>
            <View style={styles.taskCard}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <CheckBox
                            center
                            checked={check}
                            onPress={() => props.handleEdit(props.id)}
                        />
                    </View>
                    <View>
                        {check}
                        <Text style={styles.taskTitle}>{ props.title }</Text>
                        <Text>{props.status}</Text>
                    </View>

                </View>

                <View style={styles.icon}>
                    <Pressable style={{ marginRight: 10 }}
                        onPress={() => props.handleEdit(props.id)}
                    >
                        <MaterialCommunityIcons
                            name="circle-edit-outline"
                            color={"#33cc33"}
                            size={25}
                            />
                    </Pressable>
                    <View>
                        <Pressable style={{ marginRight: 10 }}
                        onPress={() => props.handleDelete(props.id)}
                        >
                            <MaterialCommunityIcons
                                name="delete-circle-outline"
                                color={"red"}
                                size={25}
                            />
                        </Pressable>
                    </View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    taskCard: {
        marginTop: 15,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 20,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#cdcddb',
        justifyContent: 'center',
    },
    icon: {
        flexDirection: "row",
        alignItems: 'flex-end',
        justifyContent: "flex-end",
        marginRight: 10,
        marginBottom: -10,
    },
    taskTitle: {
        fontSize: 18,
    }
})
