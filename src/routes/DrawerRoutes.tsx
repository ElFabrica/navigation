import { createDrawerNavigator, DrawerScreenProps } from "@react-navigation/drawer"

import { Product } from "@/app/Product";
import { Home } from "@/app/home";
import {MaterialIcons} from "@expo/vector-icons"

export type BottomRoutesList ={
    home: undefined
    product: undefined | {id: string}
}

export type BottomRoutesProps<T extends keyof BottomRoutesList> = 
DrawerScreenProps<BottomRoutesList, T>

const Drawer = createDrawerNavigator<BottomRoutesList>()

export function DrawerRoutes() {
    return(
        <Drawer.Navigator 
        initialRouteName="home"
        screenOptions={{
            headerShown:false,
            drawerActiveTintColor: "#2c46b1",
            drawerInactiveTintColor: "#444444",
        }}>
            <Drawer.Screen name="home" component={Home}
            options={{drawerLabel:"Início",
            drawerIcon: ({ color, size })=> <MaterialIcons name="home" 
            size={size} 
            color={color} />}}/>

            <Drawer.Screen name="product" component={Product}
            options={{
            drawerLabel:"Produto",
            drawerIcon: ({ color, size })=><MaterialIcons name="add-box" size={size} color={color}/>
        }}/>



        </Drawer.Navigator>

    )
}