import { NavigationContainer } from "@react-navigation/native";


import { StacksRoutes } from "./StackRoutes";
import { BottomRoutesProps } from "./BottomRoutes ";

export function Routes(){
    return(

        <NavigationContainer>
            <StacksRoutes/>
        </NavigationContainer>
    )

}