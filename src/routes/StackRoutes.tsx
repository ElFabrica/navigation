import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Product } from "@/app/Product";
import { Home } from "@/app/home";

const Stack = createNativeStackNavigator()

export function StacksRoutes() {
    return(
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={Home}/>
            <Stack.Screen name="product" component={Product}/>



        </Stack.Navigator>

    )
}