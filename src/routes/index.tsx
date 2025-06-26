import { NavigationContainer } from "@react-navigation/native";


import { StacksRoutes } from "./StackRoutes";
import { TabRoutesProps } from "./TabRoutes ";

export function Routes(){
    return(

        <NavigationContainer>
            <StacksRoutes/>
        </NavigationContainer>
    )

}