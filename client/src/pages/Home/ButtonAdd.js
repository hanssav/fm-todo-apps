import React, { useState, useContext, useEffect } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from "react-native";
import { Input, Button } from "react-native-elements"

// import { UserContext } from '../../component/context/UserContext';
import { API } from '../../config/api';

export default function ButtonAdd(props) {
    console.log(props)
    const [modalVisible, setModalVisible] = useState(false);

    const [name, setName] = useState("")

    const [task, setTask] = useState([])
    const [isLoading, setIsLoading] = useState(false)

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

    useEffect(() => {
        getTask();
    }, [])

    const handleSubmit = async () => {
        // console.log(task)
        try {
            // e.preventDefault();

            const data = {
                name,
                status: "todo",
                idUser: 1
            }

            console.log(data)

            const response = await API.post('/addtask', data)
            console.log(response)
            
            setName("")
            setModalVisible(false)
            
            getTask();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={props.showAdd}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    props.setShowAdd(!props.showAdd);
                    }}

                    >
                <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => props.setShowAdd(!props.showAdd)}
                    >
                        <Text style={styles.textButtonClose}>x</Text>
                    </Pressable>
                            <Input
                                placeholder="Input Task"
                                value={props.name}
                                onChangeText={(value) => props.setName(value)}
                            />

                            <Button
                                title="Add Task"
                                loading={false}
                                loadingProps={{ size: 'small', color: 'white' }}
                                buttonStyle={{
                                    backgroundColor: '#f075b1',
                                    borderRadius: 5,
                                    marginTop: 0,
                                }}
                                titleStyle={{ fontWeight: 'bold', fontSize: 15 }}
                                containerStyle={{
                                    // marginHorizontal: 50,
                                    height: 40,
                                    width: 150,
                                // marginVertical: 10,
                                }}
                                onPress={() => props.handleSubmit()}
                                />
                        </View>
                    </View>
                </Modal>
                {/* <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.textStyle}>+</Text>
                </Pressable> */}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 0
  },
  modalView: {
    marginHorizontal: 20,
    marginBottom: -20,
    width: "100%",
    height: '40%',
    backgroundColor: "white",
    borderRadius: 30,
    padding: 35,
    justifyContent: 'center',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
    button: {
        height: 60,
        width: 60,
        borderRadius: 30,
        padding: 10,
        elevation: 2,
        justifyContent: 'center'
        },

    buttonOpen: {
        backgroundColor: "#e22480",
    },

    buttonClose: {
        position: "absolute",
        margin: 0,
        top: -20,
        right: 0,
        backgroundColor: "red",
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textButtonClose: {
        fontSize: 15,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 0,
        paddingVertical: 0
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: 'center',
        fontSize: 25
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
