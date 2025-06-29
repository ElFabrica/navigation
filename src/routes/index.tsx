import { NavigationContainer } from "@react-navigation/native";


import { StacksRoutes } from "./StackRoutes";
import { BottomRoutesProps } from "./BottomRoutes ";
import { DrawerRoutes } from "./DrawerRoutes";

export function Routes(){
    return(

        <NavigationContainer>
            <DrawerRoutes/>
        </NavigationContainer>
    )

}