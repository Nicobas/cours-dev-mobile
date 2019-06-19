import {createStackNavigator, createAppContainer} from "react-navigation";

import RedScreen from '../components/RedScreen'
import BlueScreen from '../components/BlueScreen'
import GreenScreen from '../components/GreenScreen'

const AppNavigator = createStackNavigator({
    RedScreen: {
        screen: RedScreen
    },
    BlueScreen: {
        screen: BlueScreen
    },
    GreenScreen: {
        screen: GreenScreen
    },
}, {
    initialRouteName: "RedScreen",
});

export default createAppContainer(AppNavigator);
