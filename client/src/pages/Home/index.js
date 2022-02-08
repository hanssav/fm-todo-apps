import React, {useState, useEffect} from 'react'
import { RefreshControl, StyleSheet, Animated, Text, View, ScrollView, SafeAreaView, FlatList, Pressable } from 'react-native'

import Hero from './Hero'
import CategoryProgress from './CategoryProgress'
import CardTask from './CardTask'
// import { Button } from 'react-native-elements/dist/buttons/Button';
import ButtonAdd from './ButtonAdd';

import { API } from '../../config/api'
// import axios from 'axios'

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function index() {
    // console.log(onPress)
    // const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
    const [task, setTask] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    // console.log(task)
    
    useEffect(() => {
        getTask();
    }, [])

    const getTask = async () => {
        try {
            setIsLoading(true)
            let response = await API.get("/gettasks")
            setTask(response.data.showTasks)
            console.log(response.data.showTask)

        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    };
    
    // console.log(task)
    const [name, setName] = useState("")
    const [showAdd, setShowAdd] = useState(false);

    const handleShowAdd = () => setShowAdd(true);
    const handlCloseAdd = () => setShowAdd(false);

    const addModalProps = {
        handleShowAdd, 
        handlCloseAdd,
        setShowAdd,
        showAdd
    }

    const handleAdd = async () => {
        // console.log(task)
        try {
            // e.preventDefault();

            const data = {
                name,
                status: "todo",
                idUser: 1
            }

            console.log(name)

            const response = await API.post('/addtask', data)
            // const response = await API.post('/', data)
            console.log(response.data)
            getTask();

            setName("")
            handlCloseAdd();

        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (id) => {
        try {
            await API.delete(`deletetask/${id}`)
            getTask();
        } catch (error) {
            console.log(error)
        }
    }

    const handleEdit = async (id) => {
        try {
            console.log(id)

            await API.put(`/updatestatustask/${id}`)
            // setCheck(!check)
            getTask();

        } catch (error) {
            console.log(error)
        }
    }
    

    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, [task]);

    return (
        <View>

            <ScrollView style={{ backgroundColor: 'white' }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <View style={styles.container}>
                    <Hero />

                    <View style={styles.category}>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>Task's Overview</Text>

                        <View style={styles.categoryName}>

                            <CategoryProgress name="Todo"/>
                            <CategoryProgress name="InProgress"/>
                            <CategoryProgress name="Done"/>
                        </View>

                    </View>

                    <View key={task.id}>

                        {/* <SafeAreaView style={styles.container}>
                            <FlatList
                                data={task}
                                renderItem={_renderItem}
                                keyExtractor={task => task.id}
                            />
                            </SafeAreaView> */}
                        {
                            task.map((task, i) => {
                                return (
                                    <CardTask
                                        key={i}
                                        id = {task.id}
                                        title={task.name}
                                        status={task.status}
                                        handleDelete={() => handleDelete(task.id)}
                                        handleEdit = {() => handleEdit(task.id)}
                                    />
                                )
                            })
                        }
                    </View>
                </View>
            </ScrollView>

            <View style= {{alignItems: 'center', marginTop: 20, justifyContent: 'center', position: 'absolute', right: 20, bottom: 10,}}>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => handleShowAdd()}
                >
                    <Text style={styles.textStyle}>+</Text>
                </Pressable>
            </View>

            {/* <ButtonAdd  /> */}
            <ButtonAdd handleSubmit={() => handleAdd()} task={name} setName={setName} {...addModalProps} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
        marginHorizontal: 20,
    },
    category: { marginTop: 20 },
    categoryName: {
        flexDirection: 'row',
    },
    // task: { marginTop: 20 },
    //     taskCard: {
    //     // flexDirection: 'row',
    //     marginTop: 15,
    //     paddingVertical: 20,
    //     paddingHorizontal: 10,
    //     borderRadius: 20,
    //     borderStyle: 'solid',
    //     borderWidth: 1,
    //     borderColor: "blue",
    //     alignItems: 'center',
    // },
    taskTitle: {
        fontSize: 18,
    },
    button: {
        height: 60,
        width: 60,
        borderRadius: 30,
        padding: 10,
        elevation: 2,
        justifyContent: 'center',
        marginBottom: 20,
        },

    buttonOpen: {
        backgroundColor: "#e22480",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: 'center',
        fontSize: 25
    },
})
