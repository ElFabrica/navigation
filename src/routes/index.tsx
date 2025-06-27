import { NavigationContainer } from "@react-navigation/native";


import { StacksRoutes } from "./StackRoutes";
import { BottomRoutesProps } from "./BottomRoutes ";
import { DrawerRoutes } from "@react-navigation/native";

export function Routes(){
    return(

        <NavigationContainer>
            <DrawerRoutes/>
        </NavigationContainer>
    )

}