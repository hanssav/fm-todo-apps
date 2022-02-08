//  import navigation and stack
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Home from './src/pages/Home/index'
import AddTask from './src/pages/Task/AddTask'
import Details from './src/pages/Task/Details'
import Login from './src/pages/Profile/Login';
import Register from './src/pages/Profile/Register';

// Import Styling
import { useTheme } from 'native-base'


// Create Stack Navigation
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

export default function Container(){
    const theme = useTheme()
    // console.log(themer)

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Login"
                screenOptions={{
                    tabBarActiveTintColor: '#e91e63',
                    headerShown: false
                }}>

                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="AddTask"
                    component={AddTask}
                    options={{
                        tabBarLabel: 'Calendar',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="calendar" color={color} size={size} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Details"
                    component={Details}
                    options={{
                        tabBarLabel: 'Notification',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="bell" color={color} size={size} />
                            ),
                            tabBarBadge: 3,
                        }}
                />

                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                    }}
                />
                </Tab.Navigator>
        </NavigationContainer>
    )
    function Profile() {
        return (
        <Stack.Navigator
            screenOptions={{
                    tabBarActiveTintColor: '#e91e63',
                    headerShown: false
                }}>
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
        );
    }
}