import React, {useState, useEffect} from 'react';
// import { StatusBar } from "expo-status-bar";
import { StyleSheet,  RefreshControl } from 'react-native';
import { NativeBaseProvider, extendTheme } from 'native-base'

import { API } from './src/config/api';

// import AppLoading from 'expo-app-loading';

import {
    useFonts,
    Poppins_400Regular,
    Poppins_400Regular_Italic
} from '@expo-google-fonts/poppins'

import Container from './container';

function App() {

    // const navigationOptions = () => ({
    //     animationEnabled: false,
    // });

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_400Regular_Italic
    })

    const fontConfig = {
        Poppins: {
            400: {
                normal: "Poppins_400Regular",
                italic: "Poppins_400Regular_Italic"
            }
        }
    }

    const customColor = {
        primary: {
            500: '#ec4899',
            400: '#f472b6',
            300: '#f9a8d4',
        }
    }

    const theme = extendTheme({
        colors: customColor,
        fontConfig,
        font: {
            heading: 'Poppins',
            body: 'Poppins',
            mono: 'Poppins'
        },
        config: {initialColorMode: 'dark'}
    })

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

    return (
        <NativeBaseProvider>
            <Container />
        </NativeBaseProvider>
  );
}

export default App;

const styles = StyleSheet.create({})